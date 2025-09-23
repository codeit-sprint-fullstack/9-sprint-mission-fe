import { instance } from "@/constants/api";

/**
 *
 * @param {String} name
 * @param {String} description
 * @param {Number} price
 * @param {String[]} tags > Tag
 * @param {String[]} images > UrlType pattern: ^https://...
 */
export async function createItems(name, description, price, tags) {
  try {
    const res = await instance.post(
      `api/products`,
      {
        name,
        description,
        price,
        tags,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return res.data;
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    throw new Error("Post 요청을 실패 하였습니다.");
  } finally {
    console.log("createProduct 실행 완료");
  }
}

export async function getItems() {
  try {
    const res = await instance.get(`products`);
    return res.data;
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    throw new Error("상품 리스트를 가져오지 못했습니다.");
  } finally {
    console.log("getProduct 실행 완료");
  }
}

/**
 * @param {Number} page
 * @param {Number} pageSize
 * @param {Number} keyword
 */
export async function getItemsList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent"
) {
  try {
    const res = await instance.get(
      `/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}&orderBy=${orderBy}`
    );
    return res.data;
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    throw new Error("상품 리스트를 가져오지 못했습니다.");
  } finally {
    console.log("getProductList 실행 완료");
  }
}

/**
 * @param {Number} productId
 */
export async function patchItems(productId) {
  try {
    const res = await instance.patch(`products/${productId}`, {
      name: "change",
      description: "change",
    });
    return res.data;
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    throw new Error("Patch 요청을 실패 하였습니다.");
  } finally {
    console.log("patchProduct 실행 완료");
  }
}

/**
 * @param {Number} productId
 */
export async function deleteItems(productId) {
  try {
    const res = await instance.delete(`products/${productId}`);
    return res.data;
  } catch (err) {
    console.log(err.status);
    console.log(err.message);
    throw new Error("delete 요청을 실패 하였습니다.");
  } finally {
    console.log("deleteProduct 실행 완료");
  }
}

