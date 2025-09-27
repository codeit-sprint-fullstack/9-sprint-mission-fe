import clsx from 'clsx';
import styles from './RegistItemPage.module.css';
import { useInputValidation } from '@/hooks/useInputValidation';
import * as validation from './validation.js';
import { TagCapsule } from './TagCapsule';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createProduct } from '@/api/ProductService';

export function RegistItemPage() {
  const navigate = useNavigate();

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

  const [itemTagList, setItemTagList] = useState(new Set());

  const handleEnterTagInput = (event) => {
    if (
      event.nativeEvent.isComposing ||
      event.key !== 'Enter' ||
      !itemTagInput.isValid
    ) {
      itemTagInput.handleBlur();
      return;
    }
    event.preventDefault();
    const newTag = event.target.value;
    setItemTagList((prev) => {
      const newSet = new Set(prev);
      newSet.add(newTag);
      return newSet;
    });
    itemTagInput.reset();
  };

  const isFromVaild =
    itemTitleInput.isValid &&
    itemContextInput.isValid &&
    itemPriceInput.isValid &&
    itemTagList.size;

  const handleDeletTag = (tag) => {
    setItemTagList((prev) => {
      const newSet = new Set(prev);
      newSet.delete(tag);
      return newSet;
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (isFromVaild) {
        console.log(
          itemTitleInput.value,
          itemContextInput.value,
          itemPriceInput.value,
          itemTagList,
        );
        const newProduct = {
          name: itemTitleInput.value,
          description: itemContextInput.value,
          price: itemPriceInput.value,
          tags: [...itemTagList],
        };
        await createProduct(newProduct);
        itemTitleInput.reset();
        itemContextInput.reset();
        itemPriceInput.reset();
        itemTagInput.reset();
        setItemTagList(new Set());
        navigate('/items');
      }
    } catch (err) {
      alert(err);
    }
  };

  return (
    <main className={clsx('main', styles.registMain)}>
      <form action="" className={styles.itemRegistForm}>
        <section className={styles.formTop}>
          <h2 className={styles.formTitle}>상품 등록하기</h2>
          <input
            type="submit"
            onClick={handleSubmit}
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
            {itemTitleInput.shouldShowErr
              ? warningMessage(itemTitleInput.err)
              : ''}
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
            {itemContextInput.shouldShowErr
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
            {itemPriceInput.shouldShowErr
              ? warningMessage(itemPriceInput.err)
              : ''}
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
                onKeyDown={handleEnterTagInput}
                placeholder="태그를 입력해주세요"
              />
            </div>
            {itemTagInput.shouldShowErr ? warningMessage(itemTagInput.err) : ''}
            <div className={styles.tagCapsuleWrap}>
              {[...itemTagList].map((tag) => (
                <TagCapsule
                  key={tag}
                  tagValue={tag}
                  onDeleteTag={handleDeletTag}
                />
              ))}
            </div>
          </div>
        </section>
      </form>
    </main>
  );
}
