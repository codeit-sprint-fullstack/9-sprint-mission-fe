import styles from './ItemHeader.module.css';

function ItemHeader() {
  return (
    <nav className={styles.logoContainer}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <div>
            <a className={styles.logoTitleLink} href="/"><img className={styles.logoImg} src="../../../public/images/logo.png" alt="pandamarket" />판다마켓</a>
          </div>
          <div className={styles.logoParaContainer}>
            <p className={styles.logoPara}>자유게시판</p>
            <p className={styles.logoPara}>중고마켓</p>
          </div>
        </div>
        <a className={styles.logoBoxLink} href="../../pages/login.html">로그인</a>
      </div>
    </nav>
  )
}

export default ItemHeader