

/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { PRODUCT_URL, DEFAULT_PRODUCT_OBJ } from "./api_common.js";
import axios from 'axios';


class Product {

    static DEFAULT_URL = PRODUCT_URL;
    static DEFAULT_PRODUCT_CONTENTS = DEFAULT_PRODUCT_OBJ;
    

    /* product 상세 조회 - get */
    async getProduct(id=1) {
        
        return this.getProductAxios(id);
    }


    /* product 목록 조회 - get  */
    async getProductList(pageNum=1, pageSize=10, orderBy='recent', keyword='')  {
    
        return this.getProductListFetch(pageNum=1, pageSize=10, orderBy='recent', keyword='') ;
    }


    /* product 생성 - post  */
    async createProduct(obj= DEFAULT_PRODUCT_OBJ) {

        return this.createProductAxios(obj);
    }


    /* product 삭제 - delete */
    async deleteProduct(id) {   

        return this.deleteProductFetch(id);
    }


    /* product 수정 - PATCH Request 이용    */
    async updateProduct(obj= DEFAULT_PRODUCT_OBJ) {
        const res = await fetch(URL, {
            method: 'PATCH',
            body: JSON.stringify(obj),
            headers: {
                'Content-type': 'application/json',
            },

        });

        return;
    }


    
    /* product 상세 조회 - axios get */
    async getProductAxios(id = 1) {
        const url = Product.DEFAULT_URL + '/' + id;
        let data;

        await axios.get(url).then((res) => {
            data = res.data;

        }).catch((err) => {
            console.log(err);

        });

        console.log('data -> ', data);


        return data;
    }


    /* product 상세 조회 - fetch get */
    async getProductFetch(id = 1) {
        const url = Product.DEFAULT_URL + '/' + id;
        let data;

        try {
            const res = await fetch(url);
            data = await res.json();

            console.log('data -> ', data);
        } catch(err) {
            console.log(err);

        }


        return data;
    }



    /* product 목록 조회 - axios get  */
    async getProductListAxios(pageNum=1, pageSize=10, orderBy='recent', keyword='') {
        const url = new URL(Product.DEFAULT_URL);
        let data;

        url.searchParams.append('page', pageNum);
        url.searchParams.append('pageSize', pageSize);
        url.searchParams.append('orderBy', orderBy);
        url.searchParams.append('keyword', keyword);

        await axios.get(url).then((res) => {
            data = res.data;

        }).catch((err) => {
            console.log(err);

        });

        console.log('data -> ', data);

        return data;
    }

    /* product 목록 조회 - fetch get  */
    async getProductListFetch(pageNum=1, pageSize=10, orderBy='recent', keyword='') {
        const url = new URL(Product.DEFAULT_URL);
        let data;

        url.searchParams.append('page', pageNum);
        url.searchParams.append('pageSize', pageSize);
        url.searchParams.append('orderBy', orderBy);
        url.searchParams.append('keyword', keyword);

        try {
            const res = await fetch(url);
            data = await res.json();

        } catch(err) {
            console.log(err);
        }

        console.log('data -> ', data);

        return data;
    }


    
    /* product 생성 - axios post */
    async createProductAxios(obj= DEFAULT_PRODUCT_OBJ) {
        const url = Product.DEFAULT_URL;
        let data;

        await axios.post(url, obj).then((res) => {
            data = res.data;

        }).catch((err) => {
            console.log(err);

        });

        console.log('data -> ', data);

        return data;
    }

    
    /* product 생성 - fetch post  */
    async createProductFetch(obj= DEFAULT_PRODUCT_OBJ) {
        const url = Product.DEFAULT_URL;
        let data;

        try {
            const res = await fetch(PRODUCT_URL, {
                method: 'POST',
                body: JSON.stringify(obj),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            data = await res.json();

        } catch(err) {
            console.log(err);

        }

        console.log('data -> ', data);

        return data;
    }

    /* product 삭제 - axios delete */
    async deleteProductAxios(id) {
        const url = Product.DEFAULT_URL + '/' + id;
        let data;

        await axios.delete(url).then((res) => {
            data = res.data;

        }).catch((err) => {
            console.log(err);

        });
        
        console.log('data -> ', data);

        return data;
    }


        /* product 삭제 - fetch delete */
    async deleteProductFetch(id = 1) {
        const url = Product.DEFAULT_URL + '/' + id;
        let data;

        try {
            const res = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                },

            });

            data = await res.json();            
            
            console.log('data -> ', data);

        } catch(err) {
            console.log(err);

        }


        return data;
    }



}


(async function main() {
    const product = new Product();
    product.getProduct(2075);
    const data =  await product.deleteProduct(2075);
    
    console.log('result -> ', product.deleteProduct, data);
})();