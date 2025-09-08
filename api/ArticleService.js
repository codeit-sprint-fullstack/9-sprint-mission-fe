const API_URL = "https://panda-market-api-crud.vercel.app/articles";

const getArticleList = function(page=1, pageSize=10, keyword="") {
  const url = `${API_URL}?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`;
  return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => err);
}

const getArticle = function(id) {
  const url = `${API_URL}/${id}`;
  return fetch(url)
    .then(response => {
      if(!response.ok){
        throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => err);
}

const createArticle = function(contents) {
  const url = `${API_URL}`
  return fetch(url,{
    method: "POST",
    body: JSON.stringify(contents),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
      if(!response.ok){
        throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => err);
}

const patchArticle = function(id, contents) {
  const url = `${API_URL}/${id}`;
  return fetch(url,{
    method: "PATCH",
    body: JSON.stringify(contents),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => {
      if(!response.ok){
        throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => err);
}

const deleteArticle = function(id) {
  const url = `${API_URL}/${id}`;
  return fetch(url,{
    method: "DELETE"
  }).then(response => {
      if(!response.ok){
        throw new Error(`리퀘스트 에러: ${response.status}, 에러 메시지: ${response.statusText}`);
      }
      return response.json();
    })
    .then(data => data)
    .catch(err => err);
}

export default {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle
}