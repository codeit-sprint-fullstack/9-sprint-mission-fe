import clsx from 'clsx';
import styles from './RegistItemPage.module.css';

export function RegistItemPage() {
  return (
    <main className={clsx('main', styles.registMain)}>
      <form action="" className={styles.itemRegistForm}>
        <section className={styles.formTop}>
          <h2 className={styles.formTitle}>상품 등록하기</h2>
          <input
            type="submit"
            className="s-btn compact"
            value="등록"
            disabled={true}
          />
        </section>
        <section className={styles.formBody}>
          <div className={styles.inputSection}>
            <label htmlFor="item-name">상품명</label>
            <div className="input-wrap large-form">
              <input
                type="text"
                id="item-name"
                className="input-value"
                placeholder="상품명을 입력해주세요"
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-context">상품 소개</label>
            <div
              className={clsx(
                'input-wrap',
                'large-form',
                styles.inputTextareaWrap,
              )}
            >
              <textarea
                id="item-context"
                className={clsx('input-value', styles.inputTextarea)}
                placeholder="상품 소개를 입력해주세요"
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-price">판매 가격</label>
            <div className="input-wrap large-form">
              <input
                type="text"
                id="item-price"
                className="input-value"
                placeholder="판매 가격을 입력해주세요"
              />
            </div>
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-tag">태그</label>
            <div className="input-wrap large-form">
              <input
                type="text"
                id="item-tag"
                className="input-value"
                placeholder="태그를 입력해주세요"
              />
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
