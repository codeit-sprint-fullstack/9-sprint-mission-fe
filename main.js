import {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle,
} from "./api/articleService.js";

import {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct,
} from "./api/productService.js";


  // --- Article API ---  //
    await getArticleList({ page: 1, pageSize: 5 });
    const article = await createArticle({
    title: "테스트 제목",
    content: "테스트 내용",
    image: "https://example.com/...",
    });
    if (article?.id) {
    await getArticle(article.id);
    await patchArticle(article.id, { title: "수정된 제목" });
    await deleteArticle(article.id);
    }

  // --- Product API ---  //
    await getProductList({ page: 1, pageSize: 5 });
    const product = await createProduct({
    name: "테스트 상품",
    description: "테스트 설명",
    price: 10000,
    tags: ["테스트", "프로덕트"],
    images: ["https://example.com/..."],
    });
    if (product?.id) {
    await getProduct(product.id);
    await patchProduct(product.id, { price: 12000 });
    await deleteProduct(product.id);
    }

