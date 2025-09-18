
import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from "./ArticleService.js";
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from "./ProductService.js";


//article

async function articleFlow() {

  try {
    // 생성
    const created = await createArticle({
      title: '게시글 제목',
      content: '게시글 내용',
      image: 'https://via.placeholder.com/150'
    });
    const newPostId = created.id;
    console.log('생성된 글', newPostId);

    //조회
    const data = await getArticle(newPostId);
    console.log('단일 게시글 조회', data);


    //수정
    const updated = await patchArticle(newPostId, {
      title: '수정된 테스트 게시글',
      content: '수정된 테스트 게시글입니다',
      image: 'https://via.placeholder.com/150'
    });
    console.log('게시글 수정 완료', updated);

    //삭제
    const deleted = await deleteArticle(newPostId);
    console.error('삭제된 게시글', deleted);

  } catch (err) {
    console.error('게시글 오류 발생', err);
  }
}

articleFlow();

//product


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

    const newProductId = created.id;
    console.log('생성된 상품', created);

    //조회
    const product = await getProduct(newProductId);
    console.log('단일 상품 조회', product);


    //수정
    const updated = await patchProduct(newProductId, {
      name: '수정된 테스트 상품',
      description: '수정된 테스트 상품입니다',
      price: 9000,
      tags: ['수정된', '상품'],
      images: ['https://via.placeholder.com/150']
    });
    console.log('수정된 상품', updated);



    //삭제
    const deleted = await deleteProduct(newProductId);
    console.error('삭제된 상품', deleted);
  } catch (err) {
    console.error('상품 오류 발생', err);
  }
}

productFlow();


