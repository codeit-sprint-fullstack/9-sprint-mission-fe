// All import statements should be grouped at the very top.
import { getArticleList, getArticle } from './api/ArticleService.js';
import { getProductList, getProduct } from './api/productService.js'; // Check if filename casing is exactly 'ProductService.js'

console.log("--- Article API 연쇄 테스트 시작 ---");

getArticleList(1, 5)
  .then(data => {
    // 1. 목록을 성공적으로 받아왔는지, 그리고 목록이 비어있지 않은지 확인합니다.
    if (data && data.list && data.list.length > 0) {
      console.log("게시글 목록을 성공적으로 받았습니다.");
      
      // 2. 받아온 목록의 첫 번째 게시글 ID를 추출합니다.
      const firstArticleId = data.list[0].id;
      console.log(`첫 번째 게시글 ID '${firstArticleId}'로 상세 조회를 시작합니다.`);
      
      // 3. 추출한 ID로 getArticle 함수를 호출하여 다음 .then()으로 넘겨줍니다.
      return getArticle(firstArticleId); 
    } else {
      console.log("테스트할 게시글 목록이 없습니다.");
      // 다음 체인으로 넘어가지 않도록 여기서 중단합니다.
      return Promise.reject("게시글 목록 없음");
    }
  })
  .then(articleData => {
    // 4. getArticle 함수의 최종 결과를 여기서 처리합니다.
    if (articleData) {
      console.log("상세 조회 결과:", articleData);
    }
  })
  .catch(error => {
    // 5. 전체 과정 중 어디서든 발생한 오류를 여기서 처리합니다.
    console.error("Article API 테스트 중 오류 발생:", error);
  });

console.log("\n--- Product API 연쇄 테스트 시작 (async/await) ---");

(async () => {
  try {
    // 1. 상품 목록을 불러와서 결과를 기다립니다.
    const productListData = await getProductList(1, 5);

    // 2. 목록이 있고, 비어있지 않은지 확인합니다.
    if (productListData && productListData.list && productListData.list.length > 0) {
      console.log("상품 목록을 성공적으로 받았습니다.");
      
      // 3. 받아온 목록의 첫 번째 상품 ID를 추출합니다.
      const firstProductId = productListData.list[0].id;
      console.log(`첫 번째 상품 ID '${firstProductId}'로 상세 조회를 시작합니다.`);

      // 4. 추출한 ID로 상세 정보를 불러와서 결과를 기다립니다.
      const productData = await getProduct(firstProductId);
      console.log("상품 상세 조회 결과:", productData);

    } else {
      console.log("테스트할 상품 목록이 없습니다.");
    }
  } catch (error) {
    // 5. 전체 과정 중 어디서든 발생한 오류를 여기서 처리합니다.
    console.error("Product API 테스트 중 오류 발생:", error);
  }
})(); 