/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { URL_ARTICLE, DEFAULT_ARTICLE_OBJ, DEFAULT_PRODUCT_OBJ } from "./api_common.js";
import axios from 'axios';

( async () =>  {
    const func = createArticleFetch;
    const data = await func();
    
    console.log('data = > ', func, data);
})();


/* article 상세 조회 */
async function getArticle(id) {
    return getArticleFetch(id);

}



/* article 상세 조회 - aios Get  */
async function getArticleAxios(id = 1) {
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


/* article 상세 조회 - fetch get  */
async function getArticleFetch(id = 1) {
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


/* article 목록 조회 - orderby: 글 정렬 방식 recent/like, keyword: 검색 키워드  */
async function getArticleList(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {
    getArticleListFetch(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='');

}


/* article 목록 조회 - axios get  */
async function getArticleListAxios(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {
    const URL = URL_ARTICLE + '?page=' + pageNumber + '&pageSize=' 
                    + pageSize + '&orderBy=' + orderBy + '&keyword=' + keyword;
    let data;

    await axios.get(URL).then((res) => {
        data = res.data;
        console.log(data);

    }).catch((err) => {
        console.log(err);

    });

    return data;
}


/* article 목록 조회 - fetch get  */
async function getArticleListFetch(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {
    const URL = URL_ARTICLE + '?page=' + pageNumber + '&pageSize=' 
                    + pageSize + '&orderBy=' + orderBy + '&keyword=' + keyword;
    let data;
    
    try {
        const res = await fetch(URL);
        data = await res.json();
        console.log(data);

    } catch(err) {
        console.log(err);

    }

    return data;
}



/* article 생성 - { image: 'imgurl', content: 본문, title: 제목 } */
async function createArticle(obj) {
    const URL = URL_ARTICLE;
    const res = await axios.get(URL, {
        mothod: 'POST',
        body: JSON.stringyfy(obj),
        headers: {
            'Content-type': 'application/json',
        },
    });

    return;
}



/* article 생성 - axiod post    */
async function createArticleAxios(obj = DEFAULT_ARTICLE_OBJ) {
    const URL = URL_ARTICLE;
    let data;

    try {
        const res = await fetch(URL, {
            mothod: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },
        });

        console.log('res = > ', res);

    } catch(err) {
        console.log(err);

    }

    return;
}


/* article 생성 - fetch post    */
async function createArticleFetch(obj = DEFAULT_ARTICLE_OBJ) {
    const URL = URL_ARTICLE;
    let data;

    try {console.log('createArticleFetch function call - ');
        const res = await fetch(URL, {
            mothod: 'POST',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },
        });

        console.log('res = > ', res);

    } catch(err) {
        console.log(err);

    }


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

