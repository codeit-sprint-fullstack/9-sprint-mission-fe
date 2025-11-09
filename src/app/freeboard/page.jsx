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
        if (!res.ok) throw new Error('데이터를 불러올 수 없습니다.');
        const json = await res.json();
        setArticles(json.data || json || []);
      } catch (error) {
        console.error('게시글 불러오기 오류:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, []);

  if (loading) {
    return <p className="p-10 text-center text-gray-500 text-lg">로딩 중...</p>;
  }

  let filtered = articles.filter((a) =>
    a.title.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === 'latest') {
    filtered = filtered.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  } else if (sort === 'likes') {
    filtered = filtered.sort((a, b) => (b.likes || 0) - (a.likes || 0));
  }

  return (
    <main className="max-w-6xl mx-auto px-8 py-10 min-h-screen">
      <section>
        <h2 className="text-[20px] font-semibold mb-5 text-gray-900">베스트 게시글</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {articles.slice(0, 3).map((freeboard) => (
            <Link
              key={freeboard.id}
              href={`/freeboard/${freeboard.id}`}
              className="relative bg-[#F9FAFB] rounded-2xl p-5"
            >
              <div className="absolute top-0 left-[20px] bg-[#3692FF] text-white text-xs font-semibold px-3.5 py-1.5 inline-flex items-center gap-1 rounded-b-2xl">
                <Image
                  src="/ic_medal.svg"
                  alt="Best Medal"
                  width={14}
                  height={14}
                  className="object-contain"
                />
                <span>Best</span>
              </div>

              <div className="flex justify-between items-start mt-4">
                <div className="flex-1 pr-2">
                  <p className="text-[18px] font-semibold text-gray-800 leading-snug line-clamp-2">
                    {freeboard.title}
                  </p>
                </div>
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={freeboard.image || DEFAULT_IMAGE}
                    alt={freeboard.title}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
                <div className="flex items-center gap-2">
                  <span className="font-medium">
                    {freeboard.author || '총명한판다'}
                  </span>
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

      <section className="mt-12">
        <div className="flex justify-between items-center mb-4 gap h-20">
          <h2 className="text-lg font-semibold text-gray-900 ">게시글</h2>
          <Link href="/freeboard/new">
            <button className="bg-[#3692FF] text-white text-sm px-5 py-2 rounded-lg">
              글쓰기
            </button>
          </Link>
        </div>

        <div className="flex justify-between items-center mb-8 bg[#F3F4F6]">
          <div className="relative flex-1 mr-3">
            <Image
              src="/ic_search.svg"
              alt="검색"
              width={20}
              height={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-60"
            />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색할 게시글을 입력해주세요"
              className="w-full bg-[#F3F4F6]  border-gray-100 border rounded-lg pl-10 pr-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 "
            />
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-white border border-gray-100 rounded-lg text-sm px-4 py-3 text-gray-700 "
          >
            <option value="latest">최신순</option>
            <option value="likes">좋아요순</option>
          </select>
        </div>

        <ul className="divide-y divide-gray-300 rounded-m bg-[#F9FAFB]">
          {filtered.map((freeboard) => (
            <li key={freeboard.id} className="p-5">
              <Link href={`/freeboard/${freeboard.id}`} className="flex justify-between items-center">
                <div>
                  <p className="  font-semibold text-gray-800 mt-0 text-[20px] gap h-20" >
                    {freeboard.title}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="relative w-6 h-6">
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
                    <span>{freeboard.author || '총명한판다'}</span>
                    <span>· {new Date(freeboard.createdAt).toLocaleDateString('ko-KR')}</span>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-14 h-14 mb-1 rounded-md overflow-hidden bg-gray-100">
                    <Image
                      src={freeboard.image || DEFAULT_IMAGE}
                      alt={freeboard.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-xs text-gray-500 flex items-center gap h-18 gap-1 text-[14px]">
                    <Image src="/ic_heart.svg" alt="좋아요" width={18} height={18} />
                    9999+
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
