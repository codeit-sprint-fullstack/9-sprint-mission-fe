export async function getArticles() {
  const res = await fetch(`http://sprint-7-server.onrender.com/articles`);

  if (!res.ok) {
    throw new Error("게시글 목록을 가져오는데 실패했습니다");
  }

  return res.json();
}
