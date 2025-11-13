const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getItems(searchParams) {
  const res = await fetch(
    `${BASE_URL}/api/items?limit=5&page=1&keyword=${searchParams}&orderBy=recent`,
    {
      next: { revalidate: 500 },
    },
  );

  if (!res.ok) {
    throw new Error('상품 데이터를 가져오는 데 실패했습니다.');
  }

  const result = await res.json();
  return result.data;
}

export async function getItemById(id) {
  try {
    const res = await fetch(`http://localhost:3000/api/items/detail/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('상풍 상세 데이터를 가져오는 데 실패했습니다.');
    }

    const result = await res.json();
    return result.data; // 최대 3개의 게시글 배열
  } catch (error) {
    console.error(error);
  }
}
