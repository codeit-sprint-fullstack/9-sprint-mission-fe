const API_BASE_URL='https://panda-market-api-crud.vercel.app';


const request=(url,options={})=>{
    return fetch(url,options)
    .then((response)=>{
        if(!response.ok){
            throw new Error ('HTTP error! status:{response.status}');
        }
        return response.json();

        })
       .catch((error) => {
      console.error('API 요청 중 오류 발생:', error);
    });
};
/*개시글 목록 가져오기*/
export const getArticleList = (page = 1, pageSize = 10, keyword = '') => {
  const queryParams = new URLSearchParams({ page, pageSize, keyword });
  return request(`${API_BASE_URL}/articles?${queryParams}`);
};

/*게시글 가져오기*/ 
export const getArticle=(id)=>{
    return request(`${API_BASE_URL}/articles?${id}`);
}

/*게시글 생성 */
export const createArticle = (articleData) => {
  return request(`${API_BASE_URL}/articles`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleData),
  });
};

/*게시글 수정*/ 
export const patchArticle = (id, articleData) => {
  return request(`${API_BASE_URL}/articles/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(articleData),
  });
};
/*게시글 삭제*/ 
export const deleteArticle=(id)=>{
    return request(`{API_BASE_URL}/article/{id}`,{
        method :'DELETE',

    });
};