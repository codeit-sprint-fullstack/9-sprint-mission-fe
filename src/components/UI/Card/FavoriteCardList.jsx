import { useEffect, useState } from "react";
import { Card } from "./Card";
import { getProductList } from "@/api/ProductService";

<<<<<<< HEAD
import styles from './FavoriteCardList.module.css';
=======
import styles from './FavoriteCardList.module.css'
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)

export function FavoriteCardList({ page }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!page) return;

<<<<<<< HEAD
    setLoading(true);
    async function fetchProduct() {
      try {
        const data = await getProductList(1, page, '', 'favorite');
=======
    setLoading(true)
    async function fetchProduct() {
      try {
        const data = await getProductList(1, page, '', 'favorite')
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
        setProducts(data.list);
      } catch (err) {
        console.error('Failed getProduct:', err);
      } finally {
<<<<<<< HEAD
        setLoading(false);
      }
    }
    fetchProduct();
=======
        setLoading(false)
      }
    }
    fetchProduct()
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
  }, [page]);

  return (
    <div className={styles.favoriteContainer}>
      {products.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          images={item.images}
          type={"favorite"}
          loading={loading}
        />
      ))}
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
}