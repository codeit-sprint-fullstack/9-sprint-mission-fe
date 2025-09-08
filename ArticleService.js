//.then() 이용하여 비동기 처리
//.catch() 이용하여 오류 처리


//GET 게시글 목록 조회


export function getArticleList(page = 1, pageSize = 10, keyword = '') {
  return fetch('https://panda-market-api-crud.vercel.app/articles')
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .catch(err => {
      console.error('게시글 목록 조회 실패', err);
    });
}


//GET 게시글 상세 조회

export function getArticle(id) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('게시글 상세 조회 성공', data);
      return data;
    })
    .catch(err => {
      console.error('게시글 상세 조회 실패', err);
    });
}

//POST

export function createArticle({ title, content, image }) {
  return fetch('https://panda-market-api-crud.vercel.app/articles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, image })
  })

    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('게시 완료', data);
      return data;
    })
    .catch(err =>
      console.error('게시 실패', err));
}


//PATCH 게시글 수정


export function patchArticle(id, { title, content, image }) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, content, image })
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('게시글 수정 완료', data);
      return data;
    })
    .catch(err =>
      console.error('게시글 수정 실패', err));
}


//DELETE 게시글 삭제

export function deleteArticle(id) {
  return fetch(`https://panda-market-api-crud.vercel.app/articles/${id}`, {
    method: 'DELETE'
  })
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log('게시글 삭제 완료', data);
      return data;
    })
    .catch(err =>
      console.error('게시글 삭제 실패', err));
}


//연결 성공

export function testArticle() {
  console.log("연결 성공!");
}