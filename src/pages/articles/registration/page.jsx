import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productDescribeValidate, productNameValidate, productPriceValidate } from '@/utils/products/validators';
import { LoginModal } from '@/components/Modal/LoginModal';
import styles from "./ArticleRegistraion.module.css";
import { createArticle } from '@/api/ArticleService';

export function ArticleRegistration() {
  const [title, setTitle] = useState('');
  const [titleError, setTitleError] = useState('');
  const [content, setContent] = useState('');
  const [contentError, setContentError] = useState('');
  const [images, setImages] = useState('');
  const [imagesError, setImagesError] = useState('');
  const [toggleBtn, setToggleBtn] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isValid = title && content && images &&
      !titleError && !contentError && !imagesError;

    if (!isValid) {
      setToggleBtn(true);
    } else {
      setToggleBtn(false);
    }
    // navigate('/products/items');
  }, [titleError, contentError, imagesError, title, content, images, navigate]);

  const handleOnChangeName = (e) => {
    setTitle(e.target.value.trim());
    setTitleError(productNameValidate(title));
  };

  const handleOnChangeDescribe = (e) => {
    setContent(e.target.value.trim());
    setContentError(productDescribeValidate(content));
  };

  const handleOnChangePrice = (e) => {
    setImages(e.target.value.trim());
    setImagesError(productPriceValidate(images));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (toggleBtn) {
      alert("입력 필드를 확인해주세요!");
      return;
    }

    try {
      const response = await createArticle(title, content, images);

      if (response.status === 201) {
        // 임시적인 리다이렉트
        navigate('/articles');
      }
    } catch (error) {
      // (기술부채x 미션중 개인 생각 있었으면 좋을것) toast 사용
      console.error('등록중 오류 발생:', error);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        className={styles.RegContainer}
        method="POST"
        onSubmit={handleSubmit}
        autoComplete='off'
      >
        <div className={styles.RegTitle}>
          <h2>게시물 쓰기</h2>
          <button className={toggleBtn ? styles.disActiveBtn : styles.activeBtn} type='submit' disabled={toggleBtn}>등록</button>
        </div>
        <div className={styles.RegProductName}>
          <label htmlFor='article_name'>제목</label>
          <input
            type="text"
            name="article_name"
            id="article_name"
            onChange={handleOnChangeName}
            placeholder='제목을 입력해주세요'
            aria-label='제목을 입력해주세요'
            required
          />
          {titleError &&
            <span className={styles.error}>{titleError}</span>
          }
        </div>

        <div className={styles.RegProductDescribe}>
          <label htmlFor='article_describe'>내용</label>
          <textarea
            name="article_describe"
            id="article_describe"
            onChange={handleOnChangeDescribe}
            placeholder='내용을 입력해주세요'
            aria-label='내용을 입력해주세요'
            required
          >
          </textarea>
          {contentError &&
            <span className={styles.error}>{contentError}</span>
          }
        </div>

        <div className={styles.RegProductPrice}>
          <label htmlFor='article_price'>이미지</label>
          <input
            type="text"
            name='article_image'
            id='article_image'
            onChange={handleOnChangePrice}
            placeholder='판매 가격을 입력해주세요'
            aria-label='판매 가격을 입력해주세요'
            required
          />
          {imagesError &&
            <span className={styles.error}>{imagesError}</span>
          }
        </div>
      </form>

      {showModal &&
        <LoginModal close={handleCloseModal} msg={'등록중 예기치 못한 오류가 발생했습니다.\n 잠시후 다시시도해 주십시오 \n 문의(meta-os@zohomail.com)'} />
      }
    </>
  );
}