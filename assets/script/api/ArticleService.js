
const API_BASE_URL = 'https://panda-market-api-crud.vercel.app/articles';

/* 게시글 목록 가져오기 */
export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  const url = `${API_BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  return fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.table(data);
      return data;
    })
    .catch((err) => {
      console.error('게시글 목록을 불러오는 중 오류가 발생했습니다:', err.message);
    });
}

/* 게시글 가져오기 */
export function getArticle(id) {
  return fetch(`${API_BASE_URL}/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log('게시글:', data);
      return data;
    })
    .catch((err) => {
      console.error('게시글 불러오던 중 오류 발생:', err.message);
    });
}

/* 게시글 생성 */
export function createArticle({ title, content, image }) {
  return fetch(API_BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log('게시글이 생성:', data);
      return data;
    })
    .catch((err) => {
      console.error('게시글 생성 중 오류 발생:', err.message);
    });
}

/* 게시글 수정 */
export function patchArticle(id, { title, content, image }) {
  return fetch(`${API_BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      console.log('게시글 수정:', data);
      return data;
    })
    .catch((err) => {
      console.error('게시글 수정 중 오류 발생:', err.message);
    });
}

/* 게시글 삭제 */
export function deleteArticle(id) {
  return fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' })
    .then((res) => {
      if (!res.ok) throw new Error(`오류 발생! 상태 코드: ${res.status}`);
      console.log(`게시글 ${id}번이 성공적으로 삭제.`);
      return id;
    })
    .catch((err) => {
      console.error('게시글 삭제 중 오류 발생:', err.message);
    });
}
