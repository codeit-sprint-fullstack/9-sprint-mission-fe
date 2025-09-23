<<<<<<< HEAD
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { productDiscribeValidate, productNameValidate, productPriceValidate, productTagValidate } from '@/utils/products/validators';
=======
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
import { useEffect, useState } from 'react';
import { productDiscribeValidate, productNameValidate, productPriceValidate, productTagValidate } from '@/utils/products/validators';
>>>>>>> bcc2526 (Fix: 로직변경(registration))
import { X } from 'lucide-react';
import styles from './RegistraionPage.module.css';
import { useNavigate } from 'react-router-dom';

export function RegistraionPage() {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> bcc2526 (Fix: 로직변경(registration))
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [discribe, setDiscribe] = useState('');
  const [discribeError, setDiscribeError] = useState('');
  const [price, setPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [tag, setTag] = useState('');
  const [tagError, setTagError] = useState('');
  const [toggleBtn, setToggleBtn] = useState(true);

  const navigate =  useNavigate();

  useEffect(() => {
    const isValid = name && discribe && price && tag &&
      !nameError && !discribeError && !priceError && !tagError;

    if (!isValid) {
      setToggleBtn(true);
    } else {
      setToggleBtn(false);
      navigate('/products/items');
    }
  }, [nameError, discribeError, priceError, tagError]);

  const handleOnChageName = (e) => {
    setName(e.target.value.trim());
    setNameError(productNameValidate(name));
  };

  const handleOnChageDiscribe = (e) => {
    setDiscribe(e.target.value.trim());
    setDiscribeError(productDiscribeValidate(discribe));
  };

  const handleOnChagePrice = (e) => {
    setPrice(e.target.value.trim());
    setPriceError(productPriceValidate(price));
  };

  const handleOnChageTag = (e) => {
    setTag(e.target.value.trim());
    setTagError(productTagValidate(tag));
  };

<<<<<<< HEAD
  return (
    <form
      className={styles.RegContainer}
      method="POST"
      action="/api/items"
      autoComplete='off'
    >
      <div className={styles.RegTitle}>
        <h2>상품 등록하기</h2>
        <button className={toggleBtn ? styles.disActiveBtn : styles.activeBtn} type='submit' disabled={toggleBtn}>등록</button>
=======
=======
>>>>>>> bcc2526 (Fix: 로직변경(registration))
  return (
    <form
      className={styles.RegContainer}
      method="POST"
      action="/registration"
      autoComplete='off'
    >
      <div className={styles.RegTitle}>
        <h2>상품 등록하기</h2>
<<<<<<< HEAD
        <button type='submit'>등록</button>
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
        <button className={toggleBtn ? styles.disActiveBtn : styles.activeBtn} type='submit' disabled={toggleBtn}>등록</button>
>>>>>>> bcc2526 (Fix: 로직변경(registration))
      </div>
      <div className={styles.RegProductName}>
        <label htmlFor='product_name'>상품명</label>
        <input
          type="text"
          name="product_name"
          id="product_name"
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={handleOnChageName}
          placeholder='상품명을 입력해주세요'
          aria-label='상품명을 입력해주세요'
          required
        />
        {nameError &&
          <span className={styles.error}>{nameError}</span>
        }
=======
=======
          onChange={handleOnChageName}
>>>>>>> bcc2526 (Fix: 로직변경(registration))
          placeholder='상품명을 입력해주세요'
          aria-label='상품명을 입력해주세요'
          required
        />
<<<<<<< HEAD
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
        {nameError &&
          <span className={styles.error}>{nameError}</span>
        }
>>>>>>> bcc2526 (Fix: 로직변경(registration))
      </div>

      <div className={styles.RegProductDescribe}>
        <label htmlFor='product_describe'>상품 소개</label>
        <textarea
          name="product_describe"
          id="product_describe"
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={handleOnChageDiscribe}
          placeholder='상품 소개를 입력해주세요'
          aria-label='상품 소개를 입력해주세요'
          required
        >
        </textarea>
        {discribeError &&
          <span className={styles.error}>{discribeError}</span>
        }
=======
=======
          onChange={handleOnChageDiscribe}
>>>>>>> bcc2526 (Fix: 로직변경(registration))
          placeholder='상품 소개를 입력해주세요'
          aria-label='상품 소개를 입력해주세요'
          required
        >
        </textarea>
<<<<<<< HEAD
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
        {discribeError &&
          <span className={styles.error}>{discribeError}</span>
        }
>>>>>>> bcc2526 (Fix: 로직변경(registration))
      </div>

      <div className={styles.RegProductPrice}>
        <label htmlFor='product_price'>판매가격</label>
        <input
          type="text"
          name='product_price'
          id='product_price'
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={handleOnChagePrice}
          placeholder='판매 가격을 입력해주세요'
          aria-label='판매 가격을 입력해주세요'
          required
        />
        {priceError &&
          <span className={styles.error}>{priceError}</span>
        }
=======
=======
          onChange={handleOnChagePrice}
>>>>>>> bcc2526 (Fix: 로직변경(registration))
          placeholder='판매 가격을 입력해주세요'
          aria-label='판매 가격을 입력해주세요'
          required
        />
<<<<<<< HEAD
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
        {priceError &&
          <span className={styles.error}>{priceError}</span>
        }
>>>>>>> bcc2526 (Fix: 로직변경(registration))
      </div>

      <div className={styles.RegProductTag}>
        <label htmlFor='product_tag'>태그</label>
        <input
          type="text"
          name='product_tag'
          id='product_tag'
<<<<<<< HEAD
<<<<<<< HEAD
          onChange={handleOnChageTag}
          placeholder='태그를 입력해주세요'
          aria-label='태그를 입력해주세요'
          required
        />
        {tagError &&
          <span className={styles.error}>{tagError}</span>
        }
=======
=======
          onChange={handleOnChageTag}
>>>>>>> bcc2526 (Fix: 로직변경(registration))
          placeholder='태그를 입력해주세요'
          aria-label='태그를 입력해주세요'
          required
        />
<<<<<<< HEAD
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
        {tagError &&
          <span className={styles.error}>{tagError}</span>
        }
>>>>>>> bcc2526 (Fix: 로직변경(registration))
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
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)
=======
  );
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}