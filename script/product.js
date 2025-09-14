

/*
    2025. 09. 04

    미션 4 - pandamarket controller 구현
        api 주소를 이용해서 데이터를 처리
*/


import { URL_PRODUCT, DEFAULT_PRODUCT_OBJ } from "./api_common";


/* article 목록 조회 - GET Request 이용  */
async function getProductList(pageNum=1, pageSize=10, keyword='', order='recent') {
    const res = await fetch(`${PRODUCT_URL}?page=${pageNum}&pageSize=${pageSize}&orderBy=${order}`);
    const data = await res.json();

    return data;
}

/* article 조회 - GET Request 이용  */
async function getProduct(id=1) {
    const res = await fetch(`${PRODUCT_URL}/${id}`);
    const data = await res.json();

    return data;
}

/* article 생성 - POST Request 이용  */
async function createProduct(obj= DEFAULT_PRODUCT_OBJ) {
    const res = await fetch(PRODUCT_URL, {
        mothod: 'POST',
        body: JSON.stringyfy(obj),
        headers: {
            'Content-type': 'application/json',
        },
    });

    return;
}

/* article 삭제 - DELETE Request 이용 */
async function deleteProduct(id) {
    const res = await fetch(`${PRODUCT_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
        },
        
    });

    return;
}

/* article 수정 - PATCH Request 이용    */
async function patchProduct(obj= DEFAULT_PRODUCT_OBJ) {
    const res = await fetch(URL, {
        method: 'PATCH',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json',
        },

    });

    return;
}

