import article from "../api/ArticleService.js";
import product from "../api/ProductService.js";

// Article API Test

const testArticlePost = {
  "image": "https://example.com/...",
  "content": "내 말을 믿어.",
  "title": "어그노트 (생성)"
}
const testArticlePatch = {
  "image": "https://example.com/...",
  "content": "판다씨는 다들 뭘 하고 있을까나?",
  "title": "판다가 잔뜩 (수정)"
}
const testProductPost = {
  "images": [
    "https://example.com/..."
  ],
  "tags": [
    "전자제품"
  ],
  "price": 650000,
  "description": "최신 디지털 카메라 입니다. (생성)",
  "name": "TZ99"
}
const testProductPatch = {
  "images": [
    "https://example.com/..."
  ],
  "tags": [
    "전자제품"
  ],
  "price": 300000,
  "description": "동영상 특화 컴팩트 카메라 입니다. (수정)",
  "name": "파워샷 v1"
}

const testProductFlow = async () => {
  try {
    const listResult = await product.getProductList();
    if(listResult instanceof Error) throw listResult;
    console.log("getProductList: ", listResult);
    console.log("\n");

    const createResult = await product.createProduct(testProductPost);
    if(createResult instanceof Error) throw createResult;
    const newProductId = createResult.id;
    console.log("createProduct: ", createResult);
    console.log("\n");

    const findResult = await product.getProduct(newProductId);
    if(findResult instanceof Error) throw findResult;
    console.log("getProduct:", findResult);
    console.log("\n");

    const patchResult = await product.patchProduct(newProductId, testProductPatch);
    if(patchResult instanceof Error) throw patchResult;
    console.log("patchProduct:", patchResult);
    console.log("\n");

    const deleteResult = await product.deleteProduct(newProductId);
    if(deleteResult instanceof Error) throw deleteResult;
    console.log("deleteProduct:", deleteResult);
    console.log("\n");

    console.log("All Success!");

  } catch (err) {
    console.error("Err!!! ", err);
  }
};

let createdArticleId;

article.getArticleList()
  .then(listResult => {
    if(listResult instanceof Error) throw listResult;
    console.log("getArticleList: ", listResult);
    console.log("\n");

    return article.createArticle(testArticlePost);
  })
  .then(createResult => {
    if(createResult instanceof Error) throw createResult;
    createdArticleId = createResult.id;
    console.log("createArticle: ", createResult);
    console.log("\n");

    return article.getArticle(createdArticleId);
  })
  .then(findResult => {
    if(findResult instanceof Error) throw findResult;
    console.log("getArticle: ", findResult);
    console.log("\n");

    return article.patchArticle(createdArticleId, testArticlePatch);
  })
  .then(patchResult => {
    if(patchResult instanceof Error) throw patchResult;
    console.log("patchArticle: ", patchResult);
    console.log("\n");

    return article.deleteArticle(createdArticleId);
  })
  .then(deleteResult => {
    if(deleteResult instanceof Error) throw deleteResult;
    console.log("deleteArticle: ", deleteResult);
    console.log("\n");
    console.log("All Success!");

    testProductFlow();
  }).catch(err => console.log("Err!!! ", err.message));