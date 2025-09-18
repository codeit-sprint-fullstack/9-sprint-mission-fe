

//article

import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";

getArticleList().then(list => {
});

async function articleFlow() {

  try {
    // 생성
    const created = await createArticle({
      title: '게시글 제목',
      content: '게시글 내용',
      image: 'https://via.placeholder.com/150'
    });
    const newPost = created.id;
    console.log('생성된 글', newPost);

    //조회
    const data = await getArticle(newPost);
    console.log('단일 게시글 조회', data);


    //수정
    const updated = await patchArticle(newPost, {
      title: '수정된 테스트 게시글',
      content: '수정된 테스트 게시글입니다',
      image: 'https://via.placeholder.com/150'
    });
    console.log('게시글 수정 완료', updated);

    //삭제
    const deleted = await deleteArticle(newPost);
    console.error('삭제된 게시글', deleted);

  } catch (err) {
    console.error('게시글 오류 발생', err);
  }
}

articleFlow();

//product

import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from "./ProductService.js";


async function productFlow() {
  try {


    const list = await getProductList();
    console.log('전체 상품 목록:', list);

    //생성
    const created = await createProduct({
      name: '테스트 상품',
      description: '테스트 상품입니다',
      price: 1000,
      tags: ['테스트', '상품'],
      images: ['https://via.placeholder.com/150']
    });

    const newId = created.id;
    console.log('생성된 상품', created);

    //조회
    const product = await getProduct(newId);
    console.log('단일 상품 조회', product);


    //수정
    const updated = await patchProduct(newId, {
      name: '수정된 테스트 상품',
      description: '수정된 테스트 상품입니다',
      price: 9000,
      tags: ['수정된', '상품'],
      images: ['https://via.placeholder.com/150']
    });
    console.log('수정된 상품', updated);



    //삭제
    const deleted = await deleteProduct(newId);
    console.error('삭제된 상품', deleted);
  } catch (err) {
    console.error('상품 오류 발생', err);
  }
}

productFlow();


