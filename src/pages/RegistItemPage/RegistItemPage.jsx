import clsx from 'clsx';
import styles from './RegistItemPage.module.css';
import { useInputValidation } from '@/hooks/useInputValidation';
import * as validation from './validation.js';

export function RegistItemPage() {
  const warningMessage = (message = '') => {
    return <p className="warning-message">{message}</p>;
  };

  const itemTitleInput = useInputValidation({
    initialValue: '',
    validate: validation.itemNameValidation,
  });

  const itemContextInput = useInputValidation({
    initialValue: '',
    validate: validation.itemContextValidation,
  });

  const itemPriceInput = useInputValidation({
    initialValue: '',
    validate: validation.itemPriceValidation,
  });

  const itemTagInput = useInputValidation({
    initialValue: '',
    validate: validation.itemTagValidation,
  });

  const isFromVaild =
    itemTitleInput.isValid &&
    itemContextInput.isValid &&
    itemPriceInput.isValid &&
    itemTagInput.isValid;

  return (
    <main className={clsx('main', styles.registMain)}>
      <form action="" className={styles.itemRegistForm}>
        <section className={styles.formTop}>
          <h2 className={styles.formTitle}>상품 등록하기</h2>
          <input
            type="submit"
            className="s-btn compact"
            value="등록"
            disabled={!isFromVaild}
          />
        </section>
        <section className={styles.formBody}>
          <div className={styles.inputSection}>
            <label htmlFor="item-name">상품명</label>
            <div
              className={clsx(
                'input-wrap',
                'large-form',
                itemTitleInput.className,
              )}
            >
              <input
                type="text"
                id="item-name"
                className="input-value"
                value={itemTitleInput.value}
                onChange={itemTitleInput.handleChange}
                onBlur={itemTitleInput.handleBlur}
                placeholder="상품명을 입력해주세요"
              />
            </div>
            {!itemTitleInput.isValid ? warningMessage(itemTitleInput.err) : ''}
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-context">상품 소개</label>
            <div
              className={clsx(
                'input-wrap',
                'large-form',
                styles.inputTextareaWrap,
                itemContextInput.className,
              )}
            >
              <textarea
                id="item-context"
                className={clsx('input-value', styles.inputTextarea)}
                value={itemContextInput.value}
                onChange={itemContextInput.handleChange}
                onBlur={itemContextInput.handleBlur}
                placeholder="상품 소개를 입력해주세요"
              />
            </div>
            {!itemContextInput.isValid
              ? warningMessage(itemContextInput.err)
              : ''}
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-price">판매 가격</label>
            <div
              className={clsx(
                'input-wrap',
                'large-form',
                itemPriceInput.className,
              )}
            >
              <input
                type="text"
                id="item-price"
                className="input-value"
                value={itemPriceInput.value}
                onChange={itemPriceInput.handleChange}
                onBlur={itemPriceInput.handleBlur}
                placeholder="판매 가격을 입력해주세요"
              />
            </div>
            {!itemPriceInput.isValid ? warningMessage(itemPriceInput.err) : ''}
          </div>
          <div className={styles.inputSection}>
            <label htmlFor="item-tag">태그</label>
            <div
              className={clsx('input-wrap large-form', itemTagInput.className)}
            >
              <input
                type="text"
                id="item-tag"
                className="input-value"
                value={itemTagInput.value}
                onChange={itemTagInput.handleChange}
                onBlur={itemTagInput.handleBlur}
                placeholder="태그를 입력해주세요"
              />
            </div>
            {!itemTagInput.isValid ? warningMessage(itemTagInput.err) : ''}
          </div>
        </section>
      </form>
    </main>
  );
}
