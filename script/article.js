/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { URL_ARTICLE, DEFAULT_ARTICLE_OBJ, DEFAULT_PRODUCT_OBJ } from "./api_common.js";
import axios from 'axios';

( async () =>  {
    const func = getArticleFetch;
    const data = await func(12);
    
    console.log('data = > ', func, data);
})();


/* article 상세 조회 */
async function getArticle(id) {
    return getArticleFetch(id);

}



/* article 상세 조회 - GET Request 이용  */
async function getArticleAxios(id=1) {
    const URL = URL_ARTICLE + '/' + id;
    let data;
    
    await axios.get(URL).then((res) => {
        data = res.data;
        console.log(res.data);

    }).catch((err) => {
        console.log(err);        
    });

    return data;
}


/* article 상세 조회 - GET Request 이용  */
async function getArticleFetch(id=1) {
    const URL = URL_ARTICLE + '/' + id;
    let data;

    try {
        const res = await fetch(URL);
        data = await res.json();

    } catch (err) {
        console.log(err);
    }

    return data;
}


/* article 목록 조회 - GET Request 이용  */
async function getArticleListAxios(id=1) {
    const data = await fetch(URL_ARTICLE)
                .then().json();

    return data;
}


/* article 목록 조회 - GET Request 이용  */
async function getArticleListFetch(id=1) {
    const URL = URL_ARTICLE + '/' + id;
    const res = await fetch(URL);
    const data = await res.json();
                
    console.log(data);

    return data;
}

/* article 목록 조회 - GET Request 이용  */
async function getArticleList(id) {
    getArticleListFetch(id);
}

/* article 생성 - POST Request 이용  */
async function createArticle(obj) {
    const res = await fetch(URL, {
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

