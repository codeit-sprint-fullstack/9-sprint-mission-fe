import styles from './TagCapsule.module.css';
import iconClose from '@/assets/img/ic_close.svg';

export function TagCapsule({ tagValue = '', onDeleteTag }) {
  console.log(tagValue);
  const handleDeletButton = (event) => {
    event.preventDefault();
    onDeleteTag(tagValue);
  };

  return (
    <p className={styles.tagCapsule}>
      #{tagValue}
      <button className={styles.capsuleCloseBtn} onClick={handleDeletButton}>
        <img src={iconClose} alt="닫기 버튼" />
      </button>
    </p>
  );
}
