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
// Article APIs
//
// GET /articles
// const paramsForGettingArticles = {
//   page: 2,
//   pageSize: 12,
//   keyword: "",
// };
// const articles = await getArticles(paramsForGettingArticles);
// console.log(articles);

// GET /articles/:id
// const ARTICLE_GET_ID = 4340;
// const articleGotten = await getArticle(ARTICLE_GET_ID);
// console.log(articleGotten);

// POST /articles
// const newArticle = {
//   title: "게시글 제목입니다.",
//   content: "게시글 내용입니다..",
//   image: "https://example.com/...",
// };
// const createdArticle = await createArticle(newArticle);
// console.log(createdArticle);

// PATCH /articles/:id
// const ARTICLE_PATCH_ID = 4340;
// const articleToPatch = {
//   title: "수정!!할 제목입니다.",
// };
// const patchedArticle = await patchArticle(ARTICLE_PATCH_ID, articleToPatch);
// console.log(patchedArticle);

// DELETE /articles/:id
// const ARTICLE_DELETE_ID = 4340;
// const deletedArticle = await deleteArticle(ARTICLE_DELETE_ID);
// console.log(deletedArticle);

//
// Product APIs
//
// GET /products
// const paramsForProducts = {
//   page: 3,
//   pageSize: 11,
//   keyword: "",
// };
// const productList = await getProductList(paramsForProducts);
// console.log(productList);

// GET /products/:id
// const PRODUCT_GET_ID = 2020;
// const productGotten = await getProduct(PRODUCT_GET_ID);
// console.log(productGotten);

// POST / products;
// const newProduct = {
//   name: "LG그램",
//   description: "Srting...",
//   price: 1000,
//   tags: ["전자제품", "컴퓨터"],
//   images: ["https://example1.com/...", "https://example2.com/..."],
// };
// const postedProduct = await createProduct(newProduct);
// console.log(postedProduct);

// PATCH /products/:id
// const PRODUCT_PATCH_ID = 2020;
// const productToPatch = {
//   name: "LG그램 2025 (수정)",
// };
// const patchedProduct = await patchProduct(PRODUCT_PATCH_ID, productToPatch);
// console.log(patchedProduct);

// DELETE /products/:id
// const PRODUCT_DELETE_ID = 2020;
// const deletedProduct = await deleteProduct(PRODUCT_DELETE_ID);
// console.log(deletedProduct);
