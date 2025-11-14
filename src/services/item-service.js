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
    const res = await fetch(`${BASE_URL}/api/items/${id}`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('상풍 상세 데이터를 가져오는 데 실패했습니다.');
    }

    const result = await res.json();
    return result.data;
  } catch (error) {
    console.error(error);
  }
}

export async function createItem(formData) {
  const res = await fetch('/api/items', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '상품 생성 실패' }));
    throw new Error(`상품 생성을 실패하였습니다.  ${errorObj.message}`);
  }

  const result = await res.json();
  return result.data;
}

export async function updateItem(id, formData) {
  if (!id) throw new Error(`Item ID Not Found`);
  const res = await fetch(`/api/items/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '상품 수정 실패' }));
    throw new Error(`Failed Update Item: ${errorObj.message}`);
  }

  const result = await res.json();
  return result.data;
}

export async function deleteItem(id) {
  if (!id) throw new Error('상품아이디를 찾을수없습니다.');

  const res = await fetch(`/api/items/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '아이템 삭제 실패' }));
    throw new Error(`상품을 삭제하지 못하였습니다: ${errorObj.message}`);
  }

  return { success: true };
}
