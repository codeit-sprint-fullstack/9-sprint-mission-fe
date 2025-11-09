'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';


function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return '방금 전';
  const min = Math.floor(diff / 60);
  if (min < 60) return `${min}분 전`;
  const hour = Math.floor(min / 60);
  if (hour < 24) return `${hour}시간 전`;
  const day = Math.floor(hour / 24);
  if (day < 7) return `${day}일 전`;
  return date.toLocaleDateString('ko-KR');
}

export default function ArticleDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(true);

  const [showMenu, setShowMenu] = useState(false);
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editingContent, setEditingContent] = useState('');

  const STORAGE_KEY = `comments-article-${id}`;
  const DELETED_KEY = `deleted-comments-article-${id}`;

  //  게시글 불러오기
  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`https://sprint-server.onrender.com/articles/${id}`, {
          cache: 'no-store',
        });
        const json = await res.json();
        setArticle(json.data || json);
      } catch (err) {
        console.error('게시글 불러오기 오류:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchArticle();
  }, [id]);

  //  댓글 불러오기 
  async function fetchComments() {
    try {
      const res = await fetch(`https://sprint-server.onrender.com/articles/${id}/comments`, {
        cache: 'no-store',
      });
      const json = await res.json();
      const serverComments = json.data || [];
      const saved = localStorage.getItem(STORAGE_KEY);
      const localComments = saved ? JSON.parse(saved) : [];
      const deletedList = JSON.parse(localStorage.getItem(DELETED_KEY) || '[]');

      const merged = serverComments.map((serverC) => {
        const localC = localComments.find((lc) => lc.id === serverC.id);
        return localC || serverC;
      });

      const filtered = merged.filter((c) => !deletedList.includes(c.id));
      setComments(filtered);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch (err) {
      console.error('댓글 불러오기 오류:', err);
    }
  }

  useEffect(() => {
    fetchComments();
  }, [id]);

  const saveToLocal = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  //  게시글 삭제
  async function handleDelete() {
    if (!confirm('게시글을 삭제하시겠습니까?')) return;
    try {
      const res = await fetch(`https://sprint-server.onrender.com/articles/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('삭제 실패');
      alert('게시글이 삭제되었습니다.');
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem(DELETED_KEY);
      router.push('/freeboard');
    } catch (err) {
      console.error('게시글 삭제 오류:', err);
    }
  }

  //  댓글 등록
  async function handleCommentSubmit(e) {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      const res = await fetch(`https://sprint-server.onrender.com/articles/${id}/comments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      });
      if (!res.ok) throw new Error('댓글 등록 실패');
      setNewComment('');
      await fetchComments();
    } catch (err) {
      console.error('댓글 등록 오류:', err);
    }
  }

  //  댓글 삭제 
  function handleDeleteComment(commentId) {
    if (!confirm('댓글을 삭제하시겠습니까?')) return;
    const updated = comments.filter((c) => c.id !== commentId);
    setComments(updated);
    saveToLocal(updated);
    const deletedList = JSON.parse(localStorage.getItem(DELETED_KEY) || '[]');
    if (!deletedList.includes(commentId)) {
      deletedList.push(commentId);
      localStorage.setItem(DELETED_KEY, JSON.stringify(deletedList));
    }
    setActiveCommentId(null);
    alert('댓글이 삭제되었습니다.');
  }

  function handleUpdateComment(commentId) {
    if (!editingContent.trim()) return;
    const updated = comments.map((c) =>
      c.id === commentId ? { ...c, content: editingContent } : c
    );
    setComments(updated);
    saveToLocal(updated);
    setEditingCommentId(null);
    setEditingContent('');
    alert('댓글이 수정되었습니다.');
  }

  if (loading) return <p className="p-6 text-gray-500">로딩 중...</p>;
  if (!article) return <p className="p-6 text-gray-500">게시글을 찾을 수 없습니다.</p>;

  return (
    <main className="max-w-3xl mx-auto px-6 py-10 bg-white min-h-screen">
      {/* 제목 & 작성자 */}
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>

      <div className="flex items-center justify-between border-b pb-3 mb-6 text-gray-500 text-sm relative">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image src="/panda_bg.svg" alt="프로필 배경" fill className="object-cover rounded-full" />
            <Image src="/panda.svg" alt="프로필" fill className="object-contain p-1" />
          </div>
          <span>{article.author || '총명한판다'}</span>
          <span>· {timeAgo(article.createdAt)}</span>
        </div>

        {/* 수정/삭제 토글 */}
        <div className="relative">
          <button onClick={() => setShowMenu(!showMenu)}>
            <Image src="/toggle.svg" alt="토글" width={3} height={3} />
          </button>
          {showMenu && (
            <div className="absolute right-0 mt-1 bg-white border rounded-md w-24 shadow-sm z-10">
              <button
                onClick={() => router.push(`/freeboard/new?mode=edit&id=${id}`)}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                수정하기
              </button>
              <button
                onClick={handleDelete}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
              >
                삭제하기
              </button>
            </div>
          )}
        </div>
      </div>

      {/* 본문 */}
      <p className="text-gray-800 whitespace-pre-line mb-6">{article.content}</p>

      {/* 댓글 입력 */}
      <section className="mt-10">
        <h3 className="text-[17px] font-semibold mb-3 text-gray-800">댓글달기</h3>
        <form onSubmit={handleCommentSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력해주세요."
            rows="3"
            className="w-full bg-[#F3F4F6] rounded-2xl px-6 py-6 text-[15px] text-gray-800 placeholder-gray-400 resize-none"
          />
          <div className="flex justify-end mt-3">
            <button
              type="submit"
              disabled={!newComment.trim()}
              className={`px-6 py-2 text-sm font-medium rounded-md transition-all ${
                newComment.trim()
                  ? 'bg-[#97A0AE] text-white'
                  : 'bg-[#B0B6C2] text-white cursor-not-allowed'
              }`}
            >
              등록
            </button>
          </div>
        </form>

        {/* 댓글 목록 */}
        <ul className="space-y-3">
          {comments.map((c) => (
            <li key={c.id} className="bg-[#F9FAFB]  rounded-m px-5 py-4 text-gray-700">
              {editingCommentId === c.id ? (
                <div className="flex items-center gap-2 mb-2">
                  <input
                    type="text"
                    value={editingContent}
                    onChange={(e) => setEditingContent(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1 w-full text-sm"
                  />
                  <button onClick={() => handleUpdateComment(c.id)} className="text-blue-500 text-sm hover:underline">
                    저장
                  </button>
                  <button onClick={() => setEditingCommentId(null)} className="text-gray-400 text-sm hover:underline">
                    취소
                  </button>
                </div>
              ) : (
                <p className="text-[14px] text-gray-800 mb-3 gap h-10">{c.content}</p>
              )}

             {/* 프로필, 작성자, 시간, 수정삭제 */}
<div className="flex items-center justify-between">
 
  <div className="flex items-center gap-3">
    <div className="relative w-10 h-10">
      <Image
        src="/panda_bg.svg"
        alt="프로필 배경"
        fill
        className="object-cover rounded-full"
      />
      <Image
        src="/panda.svg"
        alt="프로필"
        fill
        className="object-contain p-1"
      />
    </div>

    <div className="flex flex-col leading-tight">
      <span className="text-[12px] text-gray-700 gap h-8">
        {c.author || '똑똑한판다'}
      </span>
      <span className="text-xs text-gray-400">
        {timeAgo(c.createdAt)}
      </span>
    </div>
  </div>

  {/* 수정/삭제 토글 버튼 */}
  <div className="relative">
    <button
      onClick={() =>
        setActiveCommentId(activeCommentId === c.id ? null : c.id)
      }
    >
      <Image src="/toggle.svg" alt="토글" width={3} height={3} />
    </button>

    {activeCommentId === c.id && (
      <div className="absolute right-0 mt-1 bg-white border rounded-md w-24 shadow-sm z-10">
        <button
          onClick={() => {
            setEditingCommentId(c.id);
            setEditingContent(c.content);
            setActiveCommentId(null);
          }}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          수정하기
        </button>
        <button
          onClick={() => handleDeleteComment(c.id)}
          className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
        >
          삭제하기
        </button>
      </div>
    )}
  </div>
</div>

            </li>
          ))}
        </ul>
      </section>

      {/* 목록으로 돌아가기 버튼 */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => router.push('/freeboard')}
          className="flex items-center gap-2 bg-[#3692FF] text-white px-6 py-2 rounded-full"
        >
          목록으로 돌아가기
          <Image src="/arrow_left.svg" alt="화살표" width={16} height={16} />
        </button>
      </div>
    </main>
  );
}
