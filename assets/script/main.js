import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';
// 1. 게시글 목록 불러오기
getArticleList(1, 5, '테스트').then((data) => {
  console.log('📌 게시글 목록:', data);
});

// 2. 게시글 생성 테스트 (새로 추가)
const newArticle = {
  title: '새로운 테스트 게시글',
  content: '내용이 잘 들어가나요?',
  image: 'https://picsum.photos/200'
};

createArticle(newArticle).then((data) => {
  console.log(' 게시글 생성 성공:', data);
});


/*특정 게시글 불러오기 테스트 /*/
getArticle(4180).then(data => {
  console.log(' 특정 게시글 조회 성공:', data);
});


/* 게시글 수정 테스트*/
const articleToUpdate = {
  title: '수정된 게시글 제목입니다',
  content: '내용도 이렇게 수정되었어요.'
};

patchArticle(4180, articleToUpdate).then(data => {
  console.log(' 게시글 수정 성공:', data);
});

/*
게시글 삭제 
deleteArticle(4180).then(data => {
  console.log(' 게시글 삭제 성공:', data);
});
*/