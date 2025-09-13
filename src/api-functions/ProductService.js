// 'Product' 관련 API 함수들을 모아두는 곳

const BASE_URL = new URL("https://panda-market-api-crud.vercel.app/products");

async function getProductList(params = {}) {
  // URL.searchParams: URL query parameters -> 읽기와 수정을 편리하게.
  Object.keys(params).forEach((key) =>
    BASE_URL.searchParams.append(key, params[key])
  );
  // HTTP method: default 'GET'
  const res = await fetch(BASE_URL);
  // res.status: number -> res.ok: Boolean

  if (!res.ok) {
    throw new Error("상품 글들을 가져오는데 실패했습니다.");
  } else {
    const productsGotten = await res.json();
    return productsGotten;
  }
}

async function getProduct(targetID) {
  const res = await fetch(BASE_URL + `/${targetID}`);
  console.log(res.status);
  if (!res.ok) {
    throw new Error("상품 글을 가져오는데 실패했습니다.");
  } else {
    const productGotten = await res.json();
    return productGotten;
  }
}

async function createProduct(productToPost) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productToPost),
  });

  if (!res.ok) {
    throw new Error("상품 글 작성에 실패했습니다.");
  } else {
    const productPosted = await res.json();
    return productPosted;
  }
}

async function patchProduct(targetID, productToPatch) {
  const res = await fetch(BASE_URL + `/${targetID}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productToPatch),
  });

  if (!res.ok) {
    throw new Error("상품 글 수정에 실패했습니다.");
  } else {
    const productPatched = await res.json();
    return productPatched;
  }
}

async function deleteProduct(targetID) {
  const res = await fetch(BASE_URL + `/${targetID}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    throw new Error("상품 글 삭제에 실패했습니다.");
  } else {
    const productDeleted = await res.json();
    return productDeleted;
  }
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
