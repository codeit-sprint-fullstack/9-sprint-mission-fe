// ProductService.js
const BASE_URL = 'https://panda-market-api-crud.vercel.app/products';

export async function getProductList(page = 1, pageSize = 10, keyword = '') {
  const url = `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.table(data); 
    return data;
  } catch (err) {
    console.error('Error fetching product list:', err);
  }
}

export async function getProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log('Product:', data);
    return data;
  } catch (err) {
    console.error('Error fetching product:', err);
  }
}

export async function createProduct({ name, description, price, tags, images }) {
  try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images })
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log('Product Created:', data);
    return data;
  } catch (err) {
    console.error('Error creating product:', err);
  }
}

export async function patchProduct(id, { name, description, price, tags, images }) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price, tags, images })
    });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    const data = await res.json();
    console.log('Product Updated:', data);
    return data;
  } catch (err) {
    console.error('Error updating product:', err);
  }
}

export async function deleteProduct(id) {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    console.log(`Product ${id} deleted successfully`);
    return id;
  } catch (err) {
    console.error('Error deleting product:', err);
  }
}


 
