'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ArticleForm({ mode = 'create', articleId = null }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  // 수정 모드일 경우 기존 데이터 불러오기
  useEffect(() => {
    if (mode === 'edit' && articleId) {
      async function fetchArticle() {
        try {
          const res = await fetch(`https://sprint-server.onrender.com/articles/${articleId}`);
          if (!res.ok) throw new Error('게시글을 불러올 수 없습니다.');
          const json = await res.json();
          setTitle(json.data.title);
          setContent(json.data.content);
        } catch (error) {
          console.error(error);
        }
      }
      fetchArticle();
    }
  }, [mode, articleId]);

  const isFormValid = title.trim() !== '' && content.trim() !== '';

  // 등록 or 수정 요청
  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    setLoading(true);
    try {
      const method = mode === 'edit' ? 'PATCH' : 'POST';
      const url =
        mode === 'edit'
          ? `https://sprint-server.onrender.com/articles/${articleId}`
          : 'https://sprint-server.onrender.com/articles';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content }),
      });

      if (!res.ok) throw new Error('요청에 실패했습니다.');

      const json = await res.json();
      console.log('서버 응답:', json);

      alert(mode === 'edit' ? '게시글이 수정되었습니다.' : '게시글이 등록되었습니다.');

      // 등록 후 자유게시판으로 이동
      router.push('/freeboard');
    } catch (error) {
      console.error(error);
      alert('처리 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white min-h-screen">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        {mode === 'edit' ? '게시글 수정' : '게시글 쓰기'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* 제목 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">*제목</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요"
            className="w-full bg-gray-50 rounded-lg px-4 py-3 text-xs"
          />
        </div>

        {/* 내용 */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">*내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력해주세요"
            rows="8"
            className="w-full bg-gray-50 rounded-lg px-4 py-3 text-xs"
          />
        </div>

        {/* 버튼 */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={!isFormValid || loading}
            className={`px-6 py-2 text-sm rounded-md text-white transition ${
              !isFormValid || loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500'
            }`}
          >
            {loading ? '처리 중...' : mode === 'edit' ? '수정 완료' : '등록'}
          </button>
        </div>
      </form>
    </main>
  );
}
