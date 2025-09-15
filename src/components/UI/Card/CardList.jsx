import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardList.module.css'
import { getProductList } from '@/api/ProductService'

function CardList({ currentPage, itemsPerPage, favoritePerPage, setTotalItems, type, keyword, sortType }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // undefined시 작동지연
    if (!itemsPerPage) return;

    async function fetchProduct() {
      try {
        let data = [];
        if (type === 'favorite') {
          data = await getProductList(1, favoritePerPage, '', 'favorite');
        } else {
          data = await getProductList(currentPage, itemsPerPage, keyword, sortType); // 전체상품
        }
        setProducts(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        console.error('Failed getProduct:', err);
      }
    }

    fetchProduct()
  }, [type, currentPage, itemsPerPage, setTotalItems, keyword, favoritePerPage, sortType]);

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