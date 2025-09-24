// ArticleService.js
const BASE_URL = 'https://panda-market-api-crud.vercel.app/articles';

// ---------------- Read ----------------
export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.table(data); 
      return data;         
    })
    .catch(err => console.error('Error fetching articles:', err));
}

export function getArticle(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('Article:', data);
      return data;
    })
    .catch(err => console.error('Error fetching article:', err));
}

// ---------------- Create ----------------
export function createArticle({ title, content, image }) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image })
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('Article Created:', data);
      return data; // Promise 반환
    })
    .catch(err => console.error('Error creating article:', err));
}

// ---------------- Update ----------------
export function patchArticle(id, { title, content, image }) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image })
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('Article Updated:', data);
      return data;
    })
    .catch(err => console.error('Error updating article:', err));
}

// ---------------- Delete ----------------
export function deleteArticle(id) {
  return fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      console.log(`Article ${id} deleted successfully`);
      return id; // 삭제된 ID 반환
    })
    .catch(err => console.error('Error deleting article:', err));
}
