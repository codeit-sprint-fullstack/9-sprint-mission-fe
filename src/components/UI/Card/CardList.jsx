import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardList.module.css'
import { getProductList } from '@/api/ProductService'
import { Pagination } from "@/components/Pagination/Pagination";

function CardList({ currentPage, itemsPerPage, setTotalItems, type }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let data = [];
        if (type === 'favorite') {
          data = await getProductList(1, 4, '', 'favorite');
        } else {
          data = await getProductList(currentPage, itemsPerPage); // 전체상품
        }
        setProducts(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        console.error('Failed getProduct:', err);
      }
    }

    fetchProduct()
  }, [type, currentPage, itemsPerPage, setTotalItems]);

  return (
    <div className={type === 'favorite' ? styles.favoriteContainer : styles.cardContainer}>
      {products.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          images={item.images}
          type={type}
        />
      ))}
    </div>
  )
}


export default CardList;