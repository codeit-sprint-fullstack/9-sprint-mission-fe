'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const DEFAULT_IMAGE = '/image71.png';

export default function FreeboardPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('latest');

 useEffect(() => {
  async function fetchArticles() {
    try {
      const res = await fetch('https://sprint-server.onrender.com/articles', {
        cache: 'no-store',
      });

  
      console.log('응답 상태:', res.status);

      if (!res.ok) throw new Error('데이터를 불러올 수 없습니다.');

      const json = await res.json();
      console.log('서버 응답:', json);

     
      setArticles(json.data || json || []);
    } catch (error) {
      console.error('게시글 불러오기 오류:', error);
      alert('게시글 데이터를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  }
  fetchArticles();
}, []);


  if (loading)
    return <p className="p-10 text-center text-gray-500 text-lg">로딩 중...</p>;

  // 검색 필터
  let filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  // 정렬
  if (sort === 'latest') {
    filtered = filtered.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sort === 'likes') {
    filtered = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  }

  return (
    <main className="max-w-6xl mx-auto px-8 py-10 bg-white min-h-screen">
      {/* 베스트 게시글 */}
      <section>
        <h2 className="text-lg font-semibold mb-5 text-gray-900">베스트 게시글</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.slice(0, 3).map((freeboard) => (
            <Link
              key={freeboard.id}
              href={`/freeboard/${freeboard.id}`}
              className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 p-5 overflow-visible"
            >
              <div className="absolute -top-[12px] left-5 inline-flex items-center gap-1 bg-blue-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-md s">
                <Image
                  src="/ic_medal.svg"
                  alt="Best Medal"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span>Best</span>
              </div>

              {/* 제목 + 썸네일 */}
              <div className="flex justify-between items-start mt-2">
                <div className="flex-1 pr-2">
                  <p className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
                    {freeboard.title}
                  </p>
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden border border-gray-100">
                  <Image
                    src={freeboard.image || DEFAULT_IMAGE}
                    alt={freeboard.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* 하단 정보 */}
              <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{freeboard.author || '총명한판다'}</span>
                  <span className="flex items-center gap-1 text-gray-400">
                    <Image src="/ic_heart.svg" alt="좋아요" width={12} height={12} />
                    9999+
                  </span>
                </div>
                <span>{new Date(freeboard.createdAt).toLocaleDateString('ko-KR')}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 게시글 목록 */}
      <section className="mt-12">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold text-gray-900">게시글</h2>
          <Link href="/freeboard/new">
            <button className="bg-blue-500 text-white text-sm px-4 py-2 rounded-md ">
              글쓰기
            </button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-8">
          <div className="relative w-full sm:w-1/2">
            <Image
              src="/ic_search.svg"
              alt="검색"
              width={16}
              height={16}
              className="absolute left-3 top-2.5 opacity-60"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색할 게시글을 입력해주세요"
              className="w-full border border-gray-400 rounded-lg pl-9 pr-3 py-2 text-sm  placeholder:text-gray-400"
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-md text-sm px-2 py-1 ml-4 focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-600"
          >
            <option value="latest">최신순</option>
            <option value="likes">좋아요순</option>
          </select>
        </div>

        {/* 게시글 리스트 */}
        <ul className="space-y-3">
          {filtered.map((freeboard) => (
            <li
              key={freeboard.id}
              className="border border-gray-200 bg-white rounded-xl p-4 flex justify-between items-center hover:shadow-md transition-all"
            >
              {/*  게시글 클릭 시 상세 페이지 이동 */}
              <Link href={`/freeboard/${freeboard.id}`} className="flex-1">
                <p className="font-medium text-gray-800 mb-1 hover:text-blue-600 cursor-pointer">
                  {freeboard.title}
                </p>
                <p className="text-sm text-gray-500">
                  {freeboard.author || '총명한판다'} ·{' '}
                  {new Date(freeboard.createdAt).toLocaleDateString('ko-KR')}
                </p>
              </Link>

              <div className="flex flex-col items-center">
                <div className="relative w-14 h-14 mb-1 rounded-md overflow-hidden">
                  <Image
                    src={freeboard.image || DEFAULT_IMAGE}
                    alt={freeboard.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <Image src="/ic_heart.svg" alt="좋아요" width={12} height={12} />
                  9999+
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
