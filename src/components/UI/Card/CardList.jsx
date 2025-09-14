import { useEffect, useState } from "react";
<<<<<<< HEAD
import { Card } from "./Card";
import { getProductList } from "@/api/ProductService";
import { SearchX } from "lucide-react";

import styles from './CardList.module.css';

export function CardList({ page, currentPage, keyword, sortType, setTotalItems, backKeyword }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // undefined시 작동지연
    if (!page) return;

    setLoading(true);
    async function fetchProduct() {
      try {
        let data = [];
        data = await getProductList(currentPage, page, keyword, sortType); // 전체상품
        setProducts(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        console.error('Failed getProduct:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, [currentPage, page, keyword, sortType, setTotalItems]);

  const handleClick = () => {
    backKeyword('');
  };

  if (!products.length) return <div className={styles.emptyQuery}><SearchX />검색 결과가 없습니다.<button onClick={handleClick}>검색초기화</button></div>;

  return (
    <div className={styles.cardContainer}>
=======
import Card from "./Card";
import styles from './CardList.module.css'
import { getProductList } from '@/api/ProductService'

function CardList({ currentPage, itemsPerPage, favoritePerPage, setTotalItems, type, keyword }) {
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
          data = await getProductList(currentPage, itemsPerPage, keyword); // 전체상품
        }
        setProducts(data.list);
        setTotalItems(data.totalCount);
      } catch (err) {
        console.error('Failed getProduct:', err);
      }
    }

    fetchProduct()
  }, [type, currentPage, itemsPerPage, setTotalItems, keyword, favoritePerPage]);

  return (
    <div className={type === 'favorite' ? styles.favoriteContainer : styles.cardContainer}>
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
      {products.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          images={item.images}
<<<<<<< HEAD
          loading={loading}
        />
      ))}
    </div>
  );
}
=======
          type={type}
        />
      ))}
    </div>
  )
}


export default CardList;
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
