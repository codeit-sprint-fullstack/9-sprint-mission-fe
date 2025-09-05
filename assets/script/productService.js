const API_BASE_URL='https://panda-market-api-crud.vercel.app';


/*게시글 목록 가져오기*/
export const getArticleList = (page = 1, pageSize = 10, keyword = '') => {
  const queryParams = new URLSearchParams({ page, pageSize, keyword });
  return request(`${API_BASE_URL}/articles?${queryParams}`);
};


