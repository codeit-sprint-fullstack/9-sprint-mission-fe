import React, { useState } from 'react';
import './ProductList.module.css';


function ProductList() {
  return fetch(' https://panda-market-api.vercel.app/docs/products')
    .then(response => response.json())
    .then(data => setProduct(data))
    .catch(error => console.error('데이터 오류, error'))


}



export default ProductList;