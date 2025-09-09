
import { getArticleList, getArticle } from './api/ArticleService.js';
import { getProductList, getProduct } from './api/productService.js'; 

console.log("--- Article API 테스트 시작 ---");

getArticleList(1, 5)
  .then(data => {
   
    if (data && data.list && data.list.length > 0) {
      console.log("게시글 목록을 성공적으로 받았습니다.");
      

      const firstArticleId = data.list[0].id;
      console.log(`첫 번째 게시글 ID '${firstArticleId}'로 상세 조회를 시작합니다.`);
      

      return getArticle(firstArticleId); 
    } else {
      console.log("테스트할 게시글 목록이 없습니다.");

      return Promise.reject("게시글 목록 없음");
    }
  })
  .then(articleData => {

    if (articleData) {
      console.log("상세 조회 결과:", articleData);
    }
  })
  .catch(error => {

    console.error("Article API 테스트 중 오류 발생:", error);
  });

console.log("\n--- Product API 테스트 시작 (async/await) ---");

(async () => {
  try {

    const productListData = await getProductList(1, 5);

    
    if (productListData && productListData.list && productListData.list.length > 0) {
      console.log("상품 목록을 성공적으로 받았습니다.");
      
      
      const firstProductId = productListData.list[0].id;
      console.log(`첫 번째 상품 ID '${firstProductId}'로 상세 조회를 시작합니다.`);

     
      const productData = await getProduct(firstProductId);
      console.log("상품 상세 조회 결과:", productData);

    } else {
      console.log("테스트할 상품 목록이 없습니다.");
    }
  } catch (error) {
  
    console.error("Product API 테스트 중 오류 발생:", error);
  }
})(); 
