import { useEffect, useState } from "react";
import Card from "./Card";
import styles from './CardList.module.css'
import { getProduct, getProductList } from '@/api/ProductService'

function CardList({ type }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProduct() {
      try {
        let data = [];
        if(type === 'favorite') {
          data = await getProductList(1,4,'','favorite');
        } else {
          data = await getProduct(); // 전체상품
        }
        setProducts(data.list);
      } catch (err) {
        console.error('Failed getProcut:', err)
      }
    }

    fetchProduct()
  }, [type])

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