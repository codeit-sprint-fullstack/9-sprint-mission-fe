// 'Article' 관련 API 함수들을 모아두는 곳

const BASE_URL = "https://panda-market-api-crud.vercel.app/articles";

// 1. 게시글 리스트 조회
function getArticles(params = {}) {
  const url = new URL(BASE_URL);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`게시글들을 가져오는데 실패했습니다. (${res.status})`);
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error("API 또는 네트워크 오류입니다.", error);
      throw error;
    });
}

// 2. 특정 게시글 조회
function getArticle(targetID) {
  const url = BASE_URL + `/${targetID}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          `해당 게시글을 가져오는데 실패했습니다. (${res.status})`
        );
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error("API 또는 네트워크 오류입니다.", error);
      throw error;
    });
}

// 3. 신규 게시글 작성
function createArticle(articleToPost) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleToPost),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`게시글 작성에 실패했습니다. (${res.status})`);
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error("API 또는 네트워크 오류입니다.", error);
      throw error;
    });
}

// 4. 특정 게시글 수정
function patchArticle(targetID, articleToPatch) {
  const url = BASE_URL + `/${targetID}`;

  return fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleToPatch),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`게시글 수정에 실패했습니다. (${res.status})`);
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error("API 또는 네트워크 오류입니다.", error);
      throw error;
    });
}

// 5. 특정 게시글 삭제
function deleteArticle(targetID) {
  const url = BASE_URL + `/${targetID}`;

  return fetch(url, {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("게시글 삭제에 실패했습니다.");
      } else {
        return res.json();
      }
    })
    .catch((error) => {
      console.error("API 또는 네트워크 오류입니다.", error);
      throw error;
    });
}

export { getArticles, getArticle, createArticle, patchArticle, deleteArticle };
