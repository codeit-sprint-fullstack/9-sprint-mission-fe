import styles from './TagCapsule.module.css';
import iconClose from '@/assets/img/ic_close.svg';

export function TagCapsule({ tagValue = '' }) {
  console.log(tagValue);
  return (
    <p className={styles.tagCapsule}>
      #{tagValue}
      <button className={styles.capsuleCloseBtn}>
        <img src={iconClose} alt="닫기 버튼" />
      </button>
    </p>
  );
}
