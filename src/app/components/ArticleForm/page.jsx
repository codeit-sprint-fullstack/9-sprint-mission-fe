'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function ArticleForm({ mode: initialMode = 'create', articleId: initialArticleId = null }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const mode = searchParams.get('mode') || initialMode;
  const articleId = searchParams.get('id') || initialArticleId;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (mode === 'edit' && articleId) {
      async function fetchArticle() {
        try {
          setFetching(true);
          const res = await fetch(`https://sprint-server.onrender.com/articles/${articleId}`);
          if (!res.ok) throw new Error('게시글을 불러올 수 없습니다.');
          const json = await res.json();
          const data = json.data || json;
          setTitle(data.title || '');
          setContent(data.content || '');
        } catch (error) {
          console.error('게시글 불러오기 오류:', error);
          alert('게시글을 불러오는 중 문제가 발생했습니다.');
        } finally {
          setFetching(false);
        }
      }
      fetchArticle();
    }
  }, [mode, articleId]);

  const isFormValid = title.trim() !== '' && content.trim() !== '';

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
      alert(mode === 'edit' ? '게시글이 수정되었습니다.' : '게시글이 등록되었습니다.');
      router.push('/freeboard');
    } catch (error) {
      console.error('게시글 등록/수정 오류:', error);
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

      {fetching ? (
        <p className="text-gray-500 text-sm">기존 게시글 불러오는 중...</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">*제목</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력해주세요"
              className="w-full bg-gray-50 rounded-lg px-4 py-3 text-sm border border-gray-200 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">*내용</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="내용을 입력해주세요"
              rows="8"
              className="w-full bg-gray-50 rounded-lg px-4 py-3 text-sm border border-gray-200 focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid || loading}
              className={`px-6 py-2 text-sm rounded-md text-white transition ${
                !isFormValid || loading
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#3692FF] hover:bg-[#2f81e6]'
              }`}
            >
              {loading ? '처리 중...' : mode === 'edit' ? '수정 완료' : '등록'}
            </button>
          </div>
        </form>
      )}
    </main>
  );
}
