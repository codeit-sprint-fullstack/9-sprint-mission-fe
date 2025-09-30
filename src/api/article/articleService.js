import axios from "axios";

const api = axios.create({
    baseURL: "https://panda-market-api-crud.vercel.app",
    headers: { "Content-Type": "application/json" },
});

export function getArticleList({ page = 1, pageSize = 10, keyword = "" } = {}) {
    return api
    .get("/articles", { params: { page, pageSize, keyword } })
    .then(res => {
        console.log("Article List:", res.data);
        return res.data;
    })
    .catch(err => {
        console.error("getArticleList error:", err.response?.status, err.response?.data);
    });
}

export function getArticle(id) {
    return api
    .get(`/articles/${id}`)
    .then(res => {
        console.log("Article:", res.data);
        return res.data;
    })
    .catch(err => {
        console.error("getArticle error:", err.response?.status, err.response?.data);
    });
}

export function createArticle({ title, content, image }) {
    return api
    .post("/articles", { title, content, image })
    .then(res => {
        console.log("Article Created:", res.data);
        return res.data;
    })
    .catch(err => {
        console.error("createArticle error:", err.response?.status, err.response?.data);
    });
}

export function patchArticle(id, params) {
    return api
    .patch(`/articles/${id}`, params)
    .then(res => {
        console.log("Article Updated:", res.data);
        return res.data;
    })
    .catch(err => {
        console.error("patchArticle error:", err.response?.status, err.response?.data);
    });
}

export function deleteArticle(id) {
    return api
    .delete(`/articles/${id}`)
    .then(res => {
        console.log("Article Deleted:", res.data);
        return res.data;
    })
    .catch(err => {
        console.error("deleteArticle error:", err.response?.status, err.response?.data);
    });
}
