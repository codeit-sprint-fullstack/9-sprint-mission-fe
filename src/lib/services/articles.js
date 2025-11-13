import dayjs from "dayjs";
import "dayjs/locale/ko";
import macBook from "@/public/images/macBook.png";
import profile from "@/public/images/profile.png";
import heart from "@/public/images/heart.png";
import { defaultFetch } from "./fetchClient";

//게시글 목록 조회
export async function getArticles() {
  const result = await defaultFetch("/articles");

  const postsDefaults = result.list.map((item) => ({
    ...item,
    likes: item.likeCount || "9,999",
    author: item.writer.nickname || "익명 사용자",
    background: macBook,
    profile,
    heart,
    date: dayjs(item.createdAt).locale("ko").format("YYYY.MM.DD"),
  }));

  return postsDefaults;
}

//게시글 하나씩 조회
export async function getArticleById(articleId) {
  const item = await defaultFetch(`/articles/${articleId}`);

  return {
    ...item,
    author: item.likeCount || "익명 사용자",
    likes: item.likeCount || "9,999",
    background: macBook,
    profile,
    heart,
    date: dayjs(item.createdAt).locale("ko").format("YYYY.MM.DD"),
  };
}
