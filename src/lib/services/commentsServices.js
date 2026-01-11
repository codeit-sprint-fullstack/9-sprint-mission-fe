import { tokenFetch } from "./fetchClient";

export const updateComment = async ({ id, content }) => {
  return tokenFetch(`/comments/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ content }),
  });
};

export const deleteComment = async ({ id }) => {
  return tokenFetch(`/comments/${id}`, {
    method: "DELETE",
  });
};
