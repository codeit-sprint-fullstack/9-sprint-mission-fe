import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './api/ArticleService.js';
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './api/productService.js';

async function runAllTests() {
  console.log("--- 전체 API 자동화 테스트 시작 ---");

  /* Article API 테스트 */
  console.log("\n--- Article API 테스트 시작 ---");
  try {
    const newArticle = await createArticle({
      title: "자동 테스트 새 게시글",
      content: "이 게시글은 테스트 후 삭제됩니다.",
    });
    console.log("게시글 생성 성공");

    const articleId = newArticle.id; // ⚠️ 응답 구조 확인 필요
    await patchArticle(articleId, { title: "제목 수정 테스트" });
    console.log("게시글 수정 성공");

    await deleteArticle(articleId);
    console.log(`게시글(ID: ${articleId}) 삭제 성공`);
  } catch (error) {
    console.error("Article API 테스트 중 오류 발생:", error.response?.data || error.message);
  }
  console.log("--- Article API 테스트 완료 ---");

  /* Product API 테스트 */
  console.log("\n--- Product API 테스트 시작 ---");
  try {
    const newProduct = await createProduct({
      name: "자동 테스트 새 상품",
      description: "이 상품은 테스트 후 삭제됩니다.",
      price: 100,
      tags: ["test"],
    });
    console.log("상품 생성 성공");

    await patchProduct(newProduct.id, { price: 500 });
    console.log("상품 수정 성공");

    await deleteProduct(newProduct.id);
    console.log(`상품(ID: ${newProduct.id}) 삭제 성공`);
  } catch (error) {
    console.error("Product API 테스트 중 오류 발생:", error.response?.data || error.message);
  }
  console.log("--- Product API 테스트 완료 ---");
}



import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 이상
import App from './App.jsx';

// React 18 방식으로 렌더링
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
