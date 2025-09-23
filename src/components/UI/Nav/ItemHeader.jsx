<<<<<<< HEAD
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
=======
import { useBreakPoint } from "@/hooks/useBreakpoint";
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
import { Link, NavLink } from "react-router-dom";
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
<<<<<<< HEAD
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
=======
            <Link className={styles.logoTitleLink} to="/"><img className={styles.logoImg} src="/images/logo.png" alt="pandamarket" />판다마켓</Link>
>>>>>>> 0bbce66 (Design: 중복된 헤더 푸터제거, a태그를 라우터Link로 변경)
          </div>
          <div className={styles.logoParaContainer}>
            <p className={styles.logoPara}>자유게시판</p>
            <Link to="/products/items"><p className={styles.logoPara}>중고마켓</p></Link>
=======
>>>>>>> d185975 (Style: NavLink로 active시 3692FF색상변경, 호버시 navlink호비서 3692FF)
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
<<<<<<< HEAD
  )
<<<<<<< HEAD
}

export default ItemHeader
>>>>>>> 397014c (Design: 이미지갯수,호버액션,최신순필터 디자인수정)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
=======
  );
}
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
