<<<<<<< HEAD
import styles from './LoginModal.module.css';
=======
import styles from './LoginModal.module.css'
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)

export function LoginModal({close,msg}) {

  return (
    <div className={styles.modalShow}>
      <div className={`${styles.modalContainer} ${styles.paraContainer}`}>
        <p className={styles.modalPara}>{msg}</p>
        <button className={styles.modalButton} onClick={close}>확인</button>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}
