export async function addComment({ postId, content }) {
  try {
    const response = await fetch("http://localhost:4000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId,
        content,
        createdAt: new Date().toISOString(),
      }),
    });
    if (!response.ok) {
      throw new Error("댓글 작성 실패");
    }
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

export async function getComments(postId) {
  const response = await fetch(
    `http://localhost:4000/comments?postId=${postId}&_sort=createdAt&_order=desc`,
    { cache: "no-store" }
  );
  return response.json();
}

export async function deleteComment(commentId) {
  const response = await fetch(`http://localhost:4000/comments/${commentId}`, {
    method: "DELETE",
  });
  if (!response.ok) {
    throw new Error("댓글 삭제 실패");
  }
  return { success: true };
}
