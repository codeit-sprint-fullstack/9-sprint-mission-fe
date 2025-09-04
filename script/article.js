/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { URL_ARTICLE, DEFAULT_ARTICLE_OBJ } from "./api_common";

/* article 목록 조회 - GET Request 이용  */
async function getArticleList(pageNum=1, pageSize=10, order='recent') {
    const res = await fetch(`${URL_ARTICLE}?page=${pageNum}&pageSize=${pageSize}&orderBy=${order}`);
    const data = await res.json();

    return data;
}

/* article 조회 - GET Request 이용  */
async function getArticle(id=1) {
    const res = await fetch(`${URL_ARTICLE}/${id}`);
    const data = await res.json();

    return data;
}

/* article 생성 - POST Request 이용  */
async function createArticle(obj= DEFAULT_ARTICLE_OBJ) {
    const res = await fetch(URL_ARTICLE, {
        mothod: 'POST',
        body: JSON.stringyfy(obj),
        headers: {
            'Content-type': 'application/json',
        },
    });

    return;
}

/* article 삭제 - DELETE Request 이용 */
async function deleteArticle(id) {
    const res = await fetch(`${URL_ARTICLE}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
        
    });

    return;
}

/* article 수정 - PATCH Request 이용    */
async function patchArticle(obj= DEFAULT_ARTICLE_OBJ) {
    const res = await fetch(URL, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json',
        },

    });

    return;
}

