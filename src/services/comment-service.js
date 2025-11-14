export async function createItemComment(id, formData) {
  const res = await fetch(`/api/items/${id}/comment`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '댓글 생성중 오류 발생' }));
    throw new Error(`문의 댓글을 생성하지 못하였습니다.${errorObj.message}`);
  }

  const result = await res.json();
  return result.data;
}

export async function updateItemComment(id, formData) {
  const res = await fetch(`/api/items/${id}/comment`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '댓글 업데이트중 오류' }));
    throw new Error(`문의 댓글을 삭제하지 못하였습니다.${errorObj.message}`);
  }

  const result = await res.json();
  return result.data;
}

export async function deleteItemComment(id, commentId) {
  const res = await fetch(`/api/items/${id}/comment?commentId=${commentId}`, {
    method: 'DELETE',
  });

  if (!res.ok) {
    const errorObj = await res
      .json()
      .catch(() => ({ message: '댓글 삭제중 오류 발생' }));
    throw new Error(`문의 댓글을 삭제하지 못하였습니다.${errorObj.message}`);
  }

  const result = await res.json();
  return result.data;
}
