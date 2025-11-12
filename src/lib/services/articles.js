const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

import dayjs from "dayjs";
import "dayjs/locale/ko";
import macBook from "@/public/images/macBook.png";
import profile from "@/public/images/profile.png";
import heart from "@/public/images/heart.png";

//게시글 목록 조회
export async function getArticles() {
  const res = await fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`게시글 불러오기 실패 : ${res.status}`);
  }

  const result = await res.json();

  const postsDefaults = result.data.map((item) => ({
    ...item,
    likes: item.likes || "9,999",
    author: item.author || "익명 사용자",
    background: macBook,
    profile,
    heart,
    date: dayjs(item.createdAt).locale("ko").format("YYYY.MM.DD"),
  }));

  return postsDefaults;
}

//게시글 하나씩 조회
export async function getArticleById(articleId) {
  const res = await fetch(`${BASE_URL}/articles/${articleId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error(`"게시글 상세 조회 실패" : ${res.status}`);
  }

  const item = await res.json();

  return {
    ...item,
    author: item.author || "익명 사용자",
    likes: item.likes || "9,999",
    background: macBook,
    profile,
    heart,
    date: dayjs(item.createdAt).locale("ko").format("YYYY.MM.DD"),
  };
}
