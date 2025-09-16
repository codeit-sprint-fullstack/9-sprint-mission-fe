import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "../api/ArticleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "../api/ProductService.js";

// ArticleService test
getArticleList(1, 5, "test").then((data) => console.log("Article List:", data));

getArticle("4235").then((data) => console.log("Single Article:", data));

createArticle("게시글 제목", "게시글 내용", "https://picsum.photos/200").then(
  (data) => console.log("Created Article:", data)
);

patchArticle("4247", {
  title: "게시물 제목 수정",
  content: "게시물 내용 수정",
}).then((data) => console.log("Patched Article:", data));

deleteArticle("4234").then((data) => console.log("Deleted Article:", data));

// ProductService test
(async () => {
  const productList = await getProductList(1, 5, "test");
  console.log("Product List:", productList);

  const product = await getProduct("1357");
  console.log("Single Product:", product);

  const newProduct = await createProduct(
    "iPhon 13",
    "아이폰 13 설명",
    11000,
    ["phone"],
    ["https://picsum.photos/200", "https://picsum.photos/201"]
  );
  console.log("Created Product:", newProduct);

  const updatedProduct = await patchProduct("1357", {
    name: "제품명 수정",
    price: 12000,
  });
  console.log("Patched Product:", updatedProduct);

  const deletedProduct = await deleteProduct("1356");
  console.log("Deleted Product:", deletedProduct);
})();
