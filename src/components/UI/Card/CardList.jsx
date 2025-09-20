<<<<<<< HEAD
<<<<<<< HEAD
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
=======
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
import Card from "./Card";
=======
>>>>>>> b606bca (Rename: 컨벤션 지키기)
import { useEffect, useState } from "react";
import { Card } from "./Card";
import { getProductList } from "@/api/ProductService";
import { SearchX } from "lucide-react";

import styles from './CardList.module.css'

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
    fetchProduct()
  }, [currentPage, page, keyword, sortType, setTotalItems]);

  const handleClick = () => {
    backKeyword('')
  }

  if (!products.length) return <div className={styles.emptyQuery}><SearchX />검색 결과가 없습니다.<button onClick={handleClick}>검색초기화</button></div>;

  return (
<<<<<<< HEAD
    <div className={type === 'favorite' ? styles.favoriteContainer : styles.cardContainer}>
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
    <div className={styles.cardContainer}>
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
      {products.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          images={item.images}
<<<<<<< HEAD
<<<<<<< HEAD
          loading={loading}
        />
      ))}
    </div>
  );
}
=======
          type={type}
          loading={isLoading}
=======
          loading={loading}
>>>>>>> 8ccae5a (Refactor: 코드 리펙토링, 검색결과없을때 상태추가)
        />
      ))}
    </div>
  )
<<<<<<< HEAD
}


export default CardList;
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
