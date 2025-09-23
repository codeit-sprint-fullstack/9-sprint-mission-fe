import { useEffect, useState } from "react";
import { Card } from "./Card";
import { getProductList } from "@/api/ProductService";

<<<<<<< HEAD
<<<<<<< HEAD
import styles from './FavoriteCardList.module.css';
=======
import styles from './FavoriteCardList.module.css'
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
=======
import styles from './FavoriteCardList.module.css';
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)

export function FavoriteCardList({ page }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!page) return;

<<<<<<< HEAD
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
=======
    setLoading(true);
    async function fetchProduct() {
      try {
        const data = await getProductList(1, page, '', 'favorite');
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
        setProducts(data.list);
      } catch (err) {
        console.error('Failed getProduct:', err);
      } finally {
<<<<<<< HEAD
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
=======
        setLoading(false);
      }
    }
    fetchProduct();
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
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
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 464d10a (Style: 가독성을 위해 임포트 위치 정렬, 정적파일 주소 수정)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}