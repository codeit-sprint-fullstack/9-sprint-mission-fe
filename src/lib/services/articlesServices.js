import { cache } from "react";

const API = process.env.API_URL + "/articles";
const PUBLIC_API = process.env.NEXT_PUBLIC_API_URL + "/articles";

export const getArticlesList = async ({ pageSize = 30, keyword = "" }) => {
  const res = await fetch(
    API + `?orderBy=recent&page=1&pageSize=${pageSize}&keyword=${keyword}`
  );
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
};

export const getArticleById = cache(async ({ id }) => {
  const res = await fetch(API + `/${id}`);
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
});

export const getArticleByIdClient = cache(async ({ id }) => {
  const res = await fetch(PUBLIC_API + `/${id}`);
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
});

export const createArticle = async ({ title, content }) => {
  try {
    const res = await fetch(PUBLIC_API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    if (!res.ok) {
      throw new Error("데이터를 생성하는데 실패했습니다");
    }
    return { success: true, data: res };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const updateArticle = async ({ id, title, content }) => {
  try {
    const res = await fetch(PUBLIC_API + `/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    if (!res.ok) {
      throw new Error("데이터를 생성하는데 실패했습니다");
    }
    return { success: true, data: res };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export const deleteArticleById = async ({ id }) => {
  const res = await fetch(PUBLIC_API + `/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("데이터를 삭제하는데 실패했습니다");
  }
  return { success: true };
};

export const getArticleCommentsList = async ({ articleId }) => {
  const res = await fetch(PUBLIC_API + `/${articleId}/comments?limit=30`);
  if (!res.ok) {
    throw new Error("데이터를 가져오는데 실패했습니다");
  }
  return res.json();
};

export const createArticleComment = async ({ articleId, content }) => {
  const res = await fetch(PUBLIC_API + `/${articleId}/comments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      content,
    }),
  });
  if (!res.ok) {
    throw new Error("데이터를 생성하는데 실패했습니다");
  }
  return res.json();
};
