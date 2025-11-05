const API = process.env.API_URL + "/comments";
const PUBLIC_API = process.env.NEXT_PUBLIC_API_URL + "/comments";

export const updateComment = async ({ id, content }) => {
  const res = await fetch(API + `/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      content,
    },
  });
  if (!res.ok) {
    throw new Error("데이터를 생성하는데 실패했습니다");
  }
  return res.json();
};

export const deleteComment = async ({ id }) => {
  const res = await fetch(API + `/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("데이터를 삭제하는데 실패했습니다");
  }
  return res.json();
};
