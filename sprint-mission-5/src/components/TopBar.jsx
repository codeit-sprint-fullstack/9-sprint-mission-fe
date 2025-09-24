// src/components/TopBar/TopBar.jsx
import styles from './TopBar.module.css';


function TopBar() {
  return (
    <header className={styles.topBar}>
      <div className={styles.topBarInner}>
        <img src="../resources/img/logo.png" className={styles.logoIcon} alt="판다마켓 로고" />
        <span className={styles.font}>판다마켓</span>
        <a href="/login.html" className={styles.loginBtn} />
        <ul className={styles.sideMenu}>
          <li>자유게시판</li>
          <li>중고마켓</li>
        </ul>
      </div>

      <button className={styles.login}>로그인</button>
    </header >
  );
}

export default TopBar;