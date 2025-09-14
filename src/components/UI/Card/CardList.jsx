import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardList.module.css'
import { getProductList } from '@/api/ProductService'

function CardList({ currentPage, itemsPerPage, setTotalItems, type, keyword }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let data = [];
        if (type === 'favorite') {
          data = await getProductList(1, 4, '', 'favorite');
        } else {
          data = await getProductList(currentPage, itemsPerPage, keyword); // 전체상품
        }
        setProducts(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        console.error('Failed getProduct:', err);
      }
    }

    fetchProduct()
  }, [type, currentPage, itemsPerPage, setTotalItems, keyword]);

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