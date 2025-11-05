import { cache } from "react";

const API = process.env.API_URL + "/articles";

export const getArticlesList = async ({ pageSize = 0, keyword = "" }) => {
  const res = await fetch(
    API + `?orderBy=recent&page=&pageSize=${pageSize}&keyword=${keyword}`
  );
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
};

export const getArticleById = cache(async (id) => {
  const res = await fetch(API + `/${id}`);
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
});

export const createArticle = async ({ title, content }) => {
  try {
    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        title,
        content,
      },
    });
    if (!res.ok) {
      throw new Error("데이터를 가져오는데 실패했습니다");
    }
    return { success: true, data: res };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const deleteArticleById = cache(async (id) => {
  const res = await fetch(API + `/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  if (!res.ok) {
    throw new Error("댓글 삭제에 실패했습니다");
  }
  revalidatePath("/breeds/[id]", "page");
  return { success: true };
});
