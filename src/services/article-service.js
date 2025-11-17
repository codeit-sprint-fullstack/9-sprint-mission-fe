import { cookieFetch, defaultFetch } from './fetch-client';

// export async function getBestArticles() {
//   const res = await fetch(`${base_url}/api/articles/best`, {
//     next: { revalidate: 3600 }, // 1시간 마다 갱신
//   });

//   if (!res.ok) {
//     throw new Error('베스트 게시글 데이터를 가져오는 데 실패했습니다.');
//   }
//   const result = await res.json();
//   return result.data; // 최대 3개의 게시글 배열
// }

export const articleService = {
  getBestArticles: () =>
    defaultFetch(`/api/articles/best`, {
      next: { revalidate: 3600 },
    }),

  getArticles: (searchParams) =>
    defaultFetch(
      `/api/articles?limit=5&page=1&keyword=${searchParams}&orderBy=recent`,
    ),

  getArticlesById: (id) => defaultFetch(`/api/articles/${id}`),

  createArticle: (formData) =>
    cookieFetch(`/api/articles`, {
      method: 'POST',
      body: JSON.stringify(formData),
    }),

  updateArticle: (id, formData) =>
    cookieFetch(`/api/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(formData),
    }),

  deleteArticle: (id) =>
    cookieFetch(`/api/articles/${id}`, {
      method: 'DELETE',
    }),
};

// export async function getArticles(searchParams) {
//   const res = await fetch(
//     `${base_url}/api/articles?limit=5&page=1&keyword=${searchParams}&orderBy=recent`,
//     {
//       next: { revalidate: 500 },
//     },
//   );

//   if (!res.ok) {
//     throw new Error('게시글 데이터를 가져오는 데 실패했습니다.');
//   }

//   const result = await res.json();
//   return result.data;
// }

// export async function createArticle(formData) {
//   const res = await fetch(`${base_url}/api/articles`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formData),
//   });

//   if (!res.ok) {
//     const errorObj = await res
//       .json()
//       .catch(() => ({ message: '게시글 생성 실패' }));
//     throw new Error(
//       `게시글 데이터를 가져오는 데 실패했습니다: ${errorObj.message}|${res.statusText}`,
//     );
//   }

//   const result = await res.json();
//   return result.data;
// }

// export async function updateArticle(id, formDate) {
//   if (!id) throw new Error('Article ID not found');
//   const res = await fetch(`${base_url}/api/articles/${id}`, {
//     method: 'PATCH',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(formDate),
//   });

//   if (!res.ok) {
//     const errorObj = await res
//       .json()
//       .catch(() => ({ message: '게시글 수정 실패' }));

//     throw new Error(`Failed update article: ${errorObj.message}}`);
//   }

//   const result = await res.json();
//   return result.data;
// }

// export async function deleteArticle(id) {
//   if (!id) throw new Error('Article ID not found');
//   const res = await fetch(`${base_url}/api/articles/${id}`, {
//     method: 'DELETE',
//   });
//   if (!res.ok) {
//     const errorObj = await res
//       .json()
//       .catch(() => ({ message: '게시글 삭제 실패' }));
//     throw new Error(`Failed Delete Article: ${errorObj.message}}`);
//   }

//   revalidatePath('/articles');

//   return { success: true };
// }
