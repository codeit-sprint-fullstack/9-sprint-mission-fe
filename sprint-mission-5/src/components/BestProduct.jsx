import React, { useEffect, useState } from 'react';
import styles from './BestProduct.module.css';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/items';

/*
function BestProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function BestProduct() {
      try {
        const data = await getProducts({ sort: "favorite" });
        setProducts(data.list || []);
      } catch (err) {
        console.error(err);
      }
    }

    BestProduct();
  }, []);
  */

const BEST_PRODUCT_COUNT = 4;

function BestProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts({ orderBy: "favorite" });
        setProducts(data.list || []);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);


  return (
    <section id={styles.bestProduct}>
      <h2 className={styles.bestProductFont}>베스트 상품</h2>
      <div className={styles.productGrid}>
        {products.slice(0, BEST_PRODUCT_COUNT).map((item) => (
          <ProductCard key={item.id} product={item} imageSize="large" />
        ))}
      </div>
    </section>
  );


}

export default BestProduct;