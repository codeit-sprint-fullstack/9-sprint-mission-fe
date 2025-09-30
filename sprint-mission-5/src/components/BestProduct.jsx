import React, { useEffect, useState } from 'react';
import styles from './BestProduct.module.css';
import { ProductCard } from './ProductCard';
import { getProducts } from '@/api/items';

const getPageSize = () => {
  const width = window.innerWidth;
  if (width < 744) {
    return 1;
  } else if (width < 1280) {
    return 2;
  } else {
    return 4;
  }
};


function BestProduct() {
  const [itemList, setItemList] = useState([]);
  const [pageSize, setPageSize] = useState(getPageSize());

  const fetchSortedData = async ({ orderBy, pageSize }) => {
    const products = await getProducts({ orderBy, pageSize });
    setItemList(products.list);
  }


  useEffect(() => {
    const handleResize = () => {
      setPageSize(getPageSize());
    };

    window.addEventListener("resize", handleResize);
    fetchSortedData({ orderBy: "favorite", pageSize });

    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [pageSize]);

  return (
    <section id={styles.bestProduct}>
      <h2 className={styles.bestProductFont}>베스트 상품</h2>
      <div className={styles.productGrid}>
        {itemList?.map((item) => (
          <ProductCard product={item} key={`best-item-${item.id}`} imageSize="large" />
        ))}
      </div>
    </section>
  );

}

export default BestProduct;