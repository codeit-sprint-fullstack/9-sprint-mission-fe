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

// // GET /articles
// const paramsForGettingArticles = {
//   page: 2,
//   pageSize: 12,
//   keyword: "",
// };
// const articles = await getArticles(paramsForGettingArticles);
// console.log(articles);

// // GET /articles/:id
// const ARTICLE_GET_ID = 4340;
// const articleGotten = await getArticle(ARTICLE_GET_ID);
// console.log(articleGotten);

// // POST /articles
// const newArticle = {
//   title: "게시글 제목입니다.",
//   content: "게시글 내용입니다..",
//   image: "https://example.com/...",
// };
// const createdArticle = await createArticle(newArticle);
// console.log(createdArticle);

// // PATCH /articles/:id
// const ARTICLE_PATCH_ID = 4340;
// const articleToPatch = {
//   title: "수정!!할 제목입니다.",
// };
// const patchedArticle = await patchArticle(ARTICLE_PATCH_ID, articleToPatch);
// console.log(patchedArticle);

// // DELETE /articles/:id
// const ARTICLE_DELETE_ID = 4340;
// const deletedArticleID = await deleteArticle(ARTICLE_DELETE_ID);
// console.log(deletedArticleID);

//
// Product APIs =====================================================
//

// 1. 상품리스트 조회
const paramsForProductList = {
  page: 3,
  pageSize: 20,
  keyword: "",
};
// console.log(await getProductList(paramsForProductList));

// 2. 특정 상품 조회
const targetIDForGetProduct = 1846;
// console.log(await getProduct(targetIDForGetProduct));

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
// console.log(await patchProduct(targetIDForPatchProduct, productToPatch));

// 5. 기존 상품 삭제
const targetIDForDeleteProduct = 2070;
// console.log(await deleteProduct(targetIDForDeleteProduct));

// 1~5번 API를 한번에 실행시키기 (Promise.all)
// const [getList, getInfo, newInfo, patchInfo, delelteInfo] = await Promise.all([
//   getProductList(paramsForProductList),
//   getProduct(targetIDForGetProduct),
//   createProduct(newProduct),
//   patchProduct(targetIDForPatchProduct, productToPatch),
//   deleteProduct(targetIDForDeleteProduct),
// ])
//   .then((getList) => console.log(`상품리스트 조회: \n${getList}`))
//   .then((getInfo) => console.log(`상품 조회: \n${getInfo}`))
//   .then((newInfo) => console.log(`등록한 상품: \n${newInfo}`))
//   .then((patchInfo) => console.log(`수정한 상품: \n${patchInfo}`))
//   .then((delelteInfo) => console.log(`삭제한 상품: \n${delelteInfo}`))
//   .catch((error) => console.error(error));
