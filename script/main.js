
/*
    main.js - 2025. 09. 15

    미션 4 - article / product 의 
    
    CRUD 를 구현한 기능 테스트 클래스


    api 주소를 이용해서 데이터를 처리

    김유신
*/


import Product from './product.js';
import Article from './article.js';
import { DEFAULT_PRODUCT_OBJ, DEFAULT_ARTICLE_OBJ } from "./api_common.js";


export default class Main {

  static ARTICLE_CONTENTS = DEFAULT_ARTICLE_OBJ;
  static PRODUCT_CONTENTS = DEFAULT_PRODUCT_OBJ;

  constructor () {
    this.product = new Product();
    this.article = new Article();
    
  }

  testArticle() {
    // this.article.getArticle();
    // this.article.getArticleList();
    // this.article.createArticle();
    // this.article.deleteArticle();
    this.article.updateArticle();

  }


  testProduct() {
    // this.product.getProduct();
    // this.product.getProductList();
    // this.product.createProduct();
    // this.product.deleteProduct();
    this.product.updateProduct();
    
  }

}



(async function main() {
  console.log('--- main func ---');

  const test = new Main();

  test.testArticle();
  // test.testProduct();


})();
