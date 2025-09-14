// 'Product' 관련 API 함수들을 모아두는 곳

// 공통 fetch 함수
async function fetchAPI(url, options = {}, errorMessage) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) {
      throw new Error(`${errorMessage} (${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

const BASE_URL = "https://panda-market-api-crud.vercel.app/products";

async function getProductList(params = {}) {
  const url = new URL(BASE_URL);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(
        `상품 정보들을 가져오는데 실패했습니다., (${res.status})`
      );
    }
    const products = await res.json();
    return products;
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

async function getProduct(targetID) {
  const url = BASE_URL + `/${targetID}`;
  console.log(url);

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`상품 정보를 가져오는데 실패했습니다. (${res.status})`);
    }
    const product = await res.json();
    return product;
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

async function createProduct(productToPost) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToPost),
    });
    if (!res.ok) {
      throw new Error(`새로운 상품 정보 작성에 실패했습니다. (${res.status})`);
    }
    const productPosted = await res.json();
    return productPosted;
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

async function patchProduct(targetID, productToPatch) {
  const url = BASE_URL + `/${targetID}`;

  try {
    const res = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productToPatch),
    });
    if (!res.ok) {
      throw new Error(`상품 정보 수정에 실패했습니다. (${res.status})`);
    }
    const productPatched = await res.json();
    return productPatched;
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

async function deleteProduct(targetID) {
  const url = BASE_URL + `/${targetID}`;

  try {
    const res = await fetch(url, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`상품 정보 삭제에 실패했습니다. (${res.status})`);
    }
    const productDeleted = await res.json();
    return productDeleted;
  } catch (error) {
    console.error("API 또는 네트워크 오류입니다.", error);
    return null;
  }
}

export {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
};
