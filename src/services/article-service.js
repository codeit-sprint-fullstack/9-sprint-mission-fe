export async function getBestArticles() {
  // 내부 API 호출: /api/articles/best
  const res = await fetch('http://localhost:3000/api/articles/best', {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('베스트 게시글 데이터를 가져오는 데 실패했습니다.');
  }
  const result = await res.json();
  return result.data; // 최대 3개의 게시글 배열
}

export async function getArticles(searchParams) {
  const res = await fetch(
    `http://localhost:3000/api/articles?limit=5&page=1&keyword=${searchParams}&orderBy=recent`,
    {
      cache: 'no-store',
    },
  );

  if (!res.ok) {
    throw new Error('게시글 데이터를 가져오는 데 실패했습니다.');
  }

  const result = await res.json();
  return result.data;
}
