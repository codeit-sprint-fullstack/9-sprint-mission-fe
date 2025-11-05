'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Image from 'next/image';



export default function ArticleDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [article, setArticle] = useState(null);
  const[comments,setComments]=useState([]);
  const[newComments,setNewComments]=useState('');
  const [loading, setLoading] = useState(true);
  const [isEditing,setEditing]=useState(false);
  const[editTitle,setEdiTitle]=useState('');
  const[editContent,setEditContent]=useState('');


  
  useEffect(() => {
    async function fetchArticle() {
      try {
        const res = await fetch(`https://sprint-server.onrender.com/articles/${id}`, {
          cache: 'no-store',
        });
        if (!res.ok) throw new Error('게시글을 불러올 수 없습니다.');
        const json = await res.json();

        console.log('서버 응답:', json);

        setArticle(json.data || json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchArticle();
  }, [id]);

  if (loading) return <p className="p-6">로딩 중...</p>;
  if (!article) return <p className="p-6">게시글을 찾을 수 없습니다.</p>;

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 bg-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 mb-6">
        작성일:{' '}
        {article.createdAt
          ? new Date(article.createdAt).toLocaleDateString('ko-KR')
          : '날짜 정보 없음'}
      </p>
      <p className="text-gray-800 whitespace-pre-line">{article.content}</p>

      <div className="mt-10 flex justify-center">
        <button
          onClick={() => router.push('/freeboard')}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          목록으로 돌아가기
        </button>
      </div>
    </main>
  );
}
