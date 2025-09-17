//////////////// Article //////////////////
import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js';

// 브라우저 콘솔에서 직접 호출 가능하게
window.getArticleList = getArticleList;
window.createArticle = createArticle;
window.patchArticle = patchArticle;
window.deleteArticle = deleteArticle;

// 1️⃣ Article 리스트 확인
getArticleList()
  .then(list => console.log('전체 Article 리스트:', list))
  .catch(err => console.error('Article 리스트 가져오기 실패:', err));

// 2️⃣ 새 글 생성 후 ID 받아서 Update → Delete 순서
createArticle({
  title: '테스트 글',
  content: '이것은 테스트용 내용입니다.',
  image: 'https://via.placeholder.com/150'
})
  .then(created => {
    if (!created || !created.id) throw new Error('글 생성 실패');
    const newId = created.id;
    console.log('생성된 글 ID:', newId);
    return getArticle(newId).then(data => {
      console.log('조회된 글:', data);
      return newId;
    });
  })
  .then(id => {
    return patchArticle(id, {
      title: '수정된 테스트 글',
      content: '수정된 내용 test',
      image: 'https://via.placeholder.com/150'
    }).then(updated => {
      console.log('수정 완료:', updated);
      return id;
    });
  })
  .then(id => {
    return deleteArticle(id).then(deletedId => {
      console.log('삭제 완료, ID:', deletedId);
    });
  })
  .catch(err => console.error('Article CRUD 에러:', err));

//////////////// Product //////////////////
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js';

// 브라우저 콘솔에서 직접 호출 가능하게
window.getProductList = getProductList;
window.getProduct = getProduct;
window.createProduct = createProduct;
window.patchProduct = patchProduct;
window.deleteProduct = deleteProduct;

// 1️⃣ Product 리스트 확인
getProductList()
  .then(list => console.log('전체 Product 리스트:', list))
  .catch(err => console.error('Product 리스트 가져오기 실패:', err));

// 2️⃣ 새 상품 생성 후 ID 받아서 Update → Delete 순서
createProduct({
  name: '테스트 상품',
  description: '이것은 테스트용 상품입니다.',
  price: 10000,
  tags: ['테스트', '샘플'],
  images: ['https://via.placeholder.com/150']
})
  .then(created => {
    if (!created || !created.id) throw new Error('상품 생성 실패');
    const newId = created.id;
    console.log('생성된 상품 ID:', newId);
    return getProduct(newId).then(product => {
      console.log('단일 상품 조회:', product);
      return newId;
    });
  })
  .then(id => {
    return patchProduct(id, {
      name: '수정된 테스트 상품',
      description: '수정된 내용 test',
      price: 12000,
      tags: ['수정'],
      images: ['https://via.placeholder.com/150']
    }).then(updated => {
      console.log('수정 완료:', updated);
      return id;
    });
  })
  .then(id => {
    return deleteProduct(id).then(deletedId => {
      console.log('삭제 완료, ID:', deletedId);
    });
  })
  .catch(err => console.error('Product CRUD 에러:', err));
