// 'Article' 관련 API 함수들을 모아두는 곳

const BASE_URL = new URL("https://panda-market-api-crud.vercel.app/articles");

async function getArticles(params = {}) {
  // URL.searchParams: URL query parameters -> 읽기와 수정을 편리하게.
  Object.keys(params).forEach((key) =>
    BASE_URL.searchParams.append(key, params[key])
  );
  // HTTP method: default 'GET'
  const res = await fetch(BASE_URL);
  // res.status: number -> res.ok: Boolean
  if (!res.ok) {
    throw new Error("게시글들을 가져오는데 실패했습니다.");
  } else {
    const articlesGotten = await res.json();
    return articlesGotten;
  }
}

async function getArticle(targetID) {
  const res = await fetch(BASE_URL + `/${targetID}`);

  if (!res.ok) {
    throw new Error("해당 게시글을 가져오는데 실패했습니다.");
  } else {
    const articleGotten = await res.json();
    return articleGotten;
  }
}

async function createArticle(articleToPost) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleToPost),
  });

  if (!res.ok) {
    throw new Error("게시글 작성에 실패했습니다.");
  } else {
    const articlePosted = await res.json();
    return articlePosted;
  }
}

async function patchArticle(targetID, articleToPatch) {
  const res = await fetch(BASE_URL + `/${targetID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleToPatch),
  });

  if (!res.ok) {
    throw new Error("게시글 수정에 실패했습니다.");
  } else {
    const articlePatched = await res.json();
    return articlePatched;
  }
}

async function deleteArticle(targetID) {
  const res = await fetch(BASE_URL + `/${targetID}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("게시글 삭제에 실패했습니다.");
  } else {
    const articleDeleted = await res.json();
    return articleDeleted;
  }
}

export { getArticles, getArticle, createArticle, patchArticle, deleteArticle };
