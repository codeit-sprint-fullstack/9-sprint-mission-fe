import { useBreakPoint } from "@/hooks/useBreakpoint"
import { Link } from "react-router-dom";
import styles from './ItemHeader.module.css';

export function ItemHeader() {
  const { isDesktop, isTablet, isMobile } = useBreakPoint();

  return (
    <nav className={styles.logoContainer}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <div>
            <a className={styles.logoTitleLink} href="/"><img className={styles.logoImg} src="/images/logo.png" alt="pandamarket" />판다마켓</a>
          </div>
          <div className={styles.logoParaContainer}>
            <p className={styles.logoPara}>자유게시판</p>
            <Link to="/products/items"><p className={styles.logoPara}>중고마켓</p></Link>
          </div>
        </div>
        {isDesktop && (
          <a className={styles.logoBoxLink} href="login">로그인</a>
        )}
        {(isTablet || isMobile) && (
          <img className={styles.logoAvatar} src="/images/default_user_logo.svg" alt="판다마켓 로고" />
        )}
      </div>
    </nav>
  )
}