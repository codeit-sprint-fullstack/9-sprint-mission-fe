import { X } from 'lucide-react';
import styles from './RegistraionPage.module.css';

export function RegistraionPage() {
  return (
    <form className={styles.RegContainer}>
      <div className={styles.RegTitle}>
        <h2>상품 등록하기</h2>
        <button type='submit'>등록</button>
      </div>
      <div className={styles.RegProductName}>
        <label htmlFor='product_name'>상품명</label>
        <input
          type="text"
          name="product_name"
          id="product_name"
          placeholder='상품명을 입력해주세요'
        />
      </div>

      <div className={styles.RegProductDescribe}>
        <label htmlFor='product_describe'>상품 소개</label>
        <textarea
          name="product_describe"
          id="product_describe"
          placeholder='상품 소개를 입력해주세요'
        >
        </textarea>
      </div>

      <div className={styles.RegProductPrice}>
        <label htmlFor='product_price'>판매가격</label>
        <input
          type="text"
          name='product_price'
          id='product_price'
          placeholder='판매 가격을 입력해주세요'
        />
      </div>

      <div className={styles.RegProductTag}>
        <label htmlFor='product_tag'>태그</label>
        <input
          type="text"
          name='product_tag'
          id='product_tag'
          placeholder='태그를 입력해주세요'
        />
        <div className={styles.RegSelectTagsContainer}>
          <div className={styles.RegSelectTags}>
            <p>#티셔츠</p>
            <X className={styles.TagIcons} width={18} height={18} color='white' />
          </div>
          <div className={styles.RegSelectTags}>
            <p>#상의</p>
            <X className={styles.TagIcons} width={18} height={18} color='white' />
          </div>
        </div>
      </div>
    </form>
  )
}