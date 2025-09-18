//async,await 이용하여 비동기 처리
//try,catch 이용하여 오류 처리


//GET 상품 목록 조회

export async function getProductList(params = {}) {
  try {
    const url = new URL('https://panda-market-api-crud.vercel.app/products');
    url.search = new URLSearchParams(params).toString();


    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (err) {
    console.error('상품 목록 조회 실패', err);
  }
}


//GET 상품 상세 조회

export async function getProduct(id) {
  try {
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const getData = await res.json()
    console.log('상품 상세 조회 성공', getData);
    return getData;

  } catch (err) {
    console.error('상품 상세 조회 실패', err);
  }
}


//POST

export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch('https://panda-market-api-crud.vercel.app/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, tags, images }),
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const postData = await res.json()
    console.log('상품 등록 완료', postData);
    return postData;


  } catch (err) {
    console.error('상품 등록 실패', err);
  }
}


//PATCH 상품 수정

export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, price, tags, images })
    });

    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const updatedProduct = await res.json();
    console.log('상품 수정 완료', updatedProduct);
    return updatedProduct;


  } catch (err) {
    console.error('상품 수정 실패', err);
  }
}


//DELETE 상품 삭제. 

export async function deleteProduct(id) {
  try {
    const res = await fetch(`https://panda-market-api-crud.vercel.app/products/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const deleteData = await res.json()
    console.log('상품 삭제 완료', deleteData);
    return deleteData;


  } catch (err) {
    console.error('상품 삭제 실패', err);
  }
}

