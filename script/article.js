/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { ARTICLE_URL, DEFAULT_ARTICLE_OBJ } from "./api_common.js";
import axios from 'axios';

class Article {

    static DEFAULT_URL = ARTICLE_URL;
    static DEFAULT_ARTICLE_CONTENTS = DEFAULT_ARTICLE_OBJ;


    /* article 상세 조회 */
    async getArticle(id) {
        return this.getArticleAxios(id);

    }


    /* article 목록 조회 - orderby: 글 정렬 방식 recent/like, keyword: 검색 키워드  */
    async getArticleList(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {
        return this.getArticleListFetch(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='');

    }

    
    /* article 생성 - { image: 'imgurl', content: 본문, title: 제목 } */
    async createArticle(obj) {
        return this.createArticleAxios(obj);

    }
    

    /* article 상세 조회 - aios Get  */
    async getArticleAxios(id = 1) {
        const url = Article.DEFAULT_URL + '/' + id;
        let data;
        
        await axios.get(url).then((res) => {
            data = res.data;
            console.log(res.data);

        }).catch((err) => {
            console.log(err);      
        
        });

        return data;
    }


    /* article 상세 조회 - fetch get  */
    async getArticleFetch(id = 1) {
        const url = Article.DEFAULT_URL + '/' + id;
        let data;

        try {
            const res = await fetch(url);
            data = await res.json();

        } catch (err) {
            console.log(err);

        }

        return data;
    }



    /* article 목록 조회 - axios get  */
    async getArticleListAxios(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {        
        
        const url = new URL(Article.DEFAULT_URL);
        let data;

        url.searchParams.append('page', pageNumber);
        url.searchParams.append('pageSize', pageSize);
        url.searchParams.append('orderBy', orderBy);
        url.searchParams.append('keyword', keyword);

        await axios.get(url).then((res) => {
            data = res.data;
            console.log(data);

        }).catch((err) => {
            console.log(err);

        });

        return data;
    }


    /* article 목록 조회 - fetch get  */
    async getArticleListFetch(pageNumber = 1, pageSize = 10, orderBy = 'recent', keyword='') {
        
        const url = new URL(Article.DEFAULT_URL);
        let data;

        url.searchParams.append('page', pageNumber);
        url.searchParams.append('pageSize', pageSize);
        url.searchParams.append('orderBy', orderBy);
        url.searchParams.append('keyword', keyword);
        
        try {
            const res = await fetch(url);
            data = await res.json();
            console.log(data);

        } catch(err) {
            console.log(err);

        }

        return data;
    }


    /* article 생성 - axiod post    */
    async createArticleAxios(obj = Article.DEFAULT_ARTICLE_CONTENTS) {

        const url = Article.DEFAULT_URL;
        let data;

        await axios.post(url, obj).then((res) => {
            data = res.data;

        }).catch((err) => {
            console.log(err);

        });

        console.log('res = > ', data);

        return data;
    }


    /* article 생성 - fetch post    */
    async createArticleFetch(obj = Article.DEFAULT_ARTICLE_CONTENTS) {

        const url = Article.DEFAULT_URL;
        let data;

        try {
            const res = await fetch(url, {
                method: "POST",
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            data = await res.json();
            console.log('data = > ', data);

        } catch(err) {
            console.log(err);

        }

        return data;
    }


    /* article 삭제 - DELETE Request 이용 */
    async deleteArticle(id) {

        const res = await fetch(`${ARTICLE_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            
        });

        return;
    }
    


    /* article 수정 - PATCH Request 이용    */
    async patchArticle(obj= DEFAULT_ARTICLE_OBJ) {
        const res = await fetch(URL, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },

        });

        return;
    }

}


(async function main() {

    const article = new Article();

    const data = await article.createArticle();
    
    console.log('data = > ', article.createArticle, data);
})();