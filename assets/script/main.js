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
