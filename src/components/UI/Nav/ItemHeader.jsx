<<<<<<< HEAD
<<<<<<< HEAD
import { useBreakPoint } from "@/hooks/useBreakpoint";
import { Link, NavLink } from "react-router-dom";
import styles from './ItemHeader.module.css';

export function ItemHeader() {
  const { isDesktop, isTablet, isMobile } = useBreakPoint();

=======
import styles from './ItemHeader.module.css';

function ItemHeader() {
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
import { useBreakPoint } from "@/hooks/useBreakpoint"
import { Link } from "react-router-dom";
import styles from './ItemHeader.module.css';

export function ItemHeader() {
  const { isDesktop, isTablet, isMobile } = useBreakPoint();

>>>>>>> 653129e (Feat: 커스텀훅(useBreakpoint)이용하여 반응형구현)
  return (
    <nav className={styles.logoContainer}>
      <div className={styles.logoBox}>
        <div className={styles.logo}>
          <div>
<<<<<<< HEAD
<<<<<<< HEAD
            <Link className={styles.logoTitleLink} to="/"><img className={styles.logoImg} src="/images/logo.png" alt="pandamarket" />판다마켓</Link>
          </div>
          <div className={styles.logoParaContainer}>
            <p className={styles.logoPara}>자유게시판</p>
            <NavLink to="/products/items"
              className={({ isActive }) => isActive
                ? `${styles.logoPara} ${styles.active}`
                : styles.logoPara}
            >
              중고마켓
            </NavLink>
          </div>
        </div>
        {
          isDesktop && (
            <Link className={styles.logoBoxLink} to="/login">로그인</Link>
          )
        }
        {
          (isTablet || isMobile) && (
            <img className={styles.logoAvatar} src="/images/default_user_logo.svg" alt="판다마켓 로고" />
          )
        }
      </div >
    </nav >
  );
}
=======
            <a className={styles.logoTitleLink} href="/"><img className={styles.logoImg} src="../../../public/images/logo.png" alt="pandamarket" />판다마켓</a>
=======
            <a className={styles.logoTitleLink} href="/"><img className={styles.logoImg} src="/images/logo.png" alt="pandamarket" />판다마켓</a>
>>>>>>> b606bca (Rename: 컨벤션 지키기)
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
<<<<<<< HEAD
}

export default ItemHeader
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
