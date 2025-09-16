import axios from "axios";

const api = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app/articles",
});

export async function getArticleList({
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  return api
    .get("/", {
      params: { page, pageSize, keyword },
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      throw new Error(`Error: ${res.status}`);
    })
    .catch((err) => console.error("Error:", err.message));
}

export async function getArticle(id) {
  return api
    .get(`/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      throw new Error(`Error: ${res.status}`);
    })
    .catch((err) => console.error("Error:", err.message));
}

export async function createArticle(title, content, image) {
  return api
    .post("/", { title, content, image })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      throw new Error(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("createArticle Error:", err.message);
    });
}

export async function patchArticle(id, articleData) {
  return api
    .patch(`/${id}`, articleData)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      throw new Error(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("patchArticle Error:", err.message);
    });
}

export async function deleteArticle(id) {
  return api
    .delete(`/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      }
      throw new Error(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("deleteArticle Error:", err.message);
    });
}
