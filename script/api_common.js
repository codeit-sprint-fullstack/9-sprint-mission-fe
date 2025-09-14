/*
    2025. 09. 04

    api CRUD 관련 공통 함수 및 변수

    김유신
*/

export const ARTICLE_URL= 'https://panda-market-api-crud.vercel.app/articles';
export const UPRODUCT_URL = 'https://panda-market-api-crud.vercel.app/products';
export const RANDOM_IMAGE_URL = 'https://cdn.pixabay.com/photo/2025/04/24/22/36/beach-9556784_1280.jpg';

export const DEFAULT_ARTICLE_OBJ = {
    "image": RANDOM_IMAGE_URL,
    "content": "게시글 내용입니다.",
    "title": "게시글 제목입니다."
};

export const DEFAULT_PRODUCT_OBJ = {
    "images": [
        RANDOM_IMAGE_URL
    ],
    "tags": [
        "전자제품"
    ],
    "price": 0,
    "description": "string",
    "name": "상품이름"
};