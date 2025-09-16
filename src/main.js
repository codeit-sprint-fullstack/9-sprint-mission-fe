import {
  getArticles,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./api-functions/ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./api-functions/ProductService.js";

//
// Article APIs =====================================================
//

// 1. 게시글 리스트 조회
const paramsForArticles = {
  page: 1,
  pageSize: 10,
  keyword: "",
};
getArticles(paramsForArticles).then((result) => console.log(result));

// 2. 특정 게시글 조회
const ARTICLE_GET_ID = 4462;
getArticle(ARTICLE_GET_ID).then((result) => console.log(result));

// 3. 신규 게시글 작성
const newArticle = {
  title: "(신규) 게시글 제목입니다.",
  content: "(신규) 게시글 내용입니다..",
  image: "https://example.com/...",
};
createArticle(newArticle).then((result) => console.log(result));

// 4. 특정 게시글 수정
const ARTICLE_PATCH_ID = 4462;
const articleToPatch = {
  title: "수정!!할 제목입니다.",
};
patchArticle(ARTICLE_PATCH_ID, articleToPatch).then((result) =>
  console.log(result)
);

// 5. 특정 게시글 삭제
const ARTICLE_DELETE_ID = 4462;
deleteArticle(ARTICLE_DELETE_ID).then((result) => console.log(result));

//
// Product APIs =====================================================
//

// 1. 상품리스트 조회
const paramsForProductList = {
  page: 3,
  pageSize: 20,
  keyword: "",
};
console.log(await getProductList(paramsForProductList));

// 2. 특정 상품 조회
const targetIDForGetProduct = 1846;
console.log(await getProduct(targetIDForGetProduct));

// 3. 신규 상품 등록
const newProduct = {
  name: "LG그램",
  description: "Srting...",
  price: 1000,
  tags: ["전자제품", "컴퓨터"],
  images: ["https://example1.com/...", "https://example2.com/..."],
};
console.log(await createProduct(newProduct));

// 4. 기존 상품 수정
const targetIDForPatchProduct = 2070;
const productToPatch = {
  name: "LG그램 2025 (수정)",
};
console.log(await patchProduct(targetIDForPatchProduct, productToPatch));

// 5. 기존 상품 삭제
const targetIDForDeleteProduct = 2070;
console.log(await deleteProduct(targetIDForDeleteProduct));
