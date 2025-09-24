<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
import styles from './Footer.module.css';

export function Footer({ type }) {
=======
import styles from './Footer.module.css'

<<<<<<< HEAD
<<<<<<< HEAD
function Footer() {
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
function Footer({ type }) {
>>>>>>> 653129e (Feat: 커스텀훅(useBreakpoint)이용하여 반응형구현)
=======
export function Footer({ type }) {
>>>>>>> b606bca (Rename: 컨벤션 지키기)
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerDiv}>
        <p className={styles.footerDivPara}>@codeit - 2024</p>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 653129e (Feat: 커스텀훅(useBreakpoint)이용하여 반응형구현)
        {type === 'mobile' ? (
          <div className={styles.footerBottom}>
            <div className={styles.footerLink}>
              <a className={styles.footerDivLikes} href="./privacy">Privacy Policy</a>
              <a className={styles.footerDivLikes} href="./faq">FAQ</a>
            </div>
            <div className={styles.snsImages}>
              <a className={styles.footerDivLikes} href="https://www.youtube.com/results?search_query=코드잇_판다마켓" target="_blank"><img src="/images/sns/ic_youtube.svg" alt="youtube" /></a>
              <a className={styles.footerDivLikes} href="https://www.facebook.com/" target="_blank"><img src="/images/sns/ic_fb.svg" alt="facebook" /></a>
              <a className={styles.footerDivLikes} href="https://www.instagram.com/" target="_blank"><img src="/images/sns/ic_instagram.svg" alt="instagram" /></a>
              <a className={styles.footerDivLikes} href="https://www.twitter.com/" target="_blank"><img src='/images/sns/ic_twitter.svg' alt="twitter" /></a>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.footerLink}>
              <a className={styles.footerDivLikes} href="./privacy">Privacy Policy</a>
              <a className={styles.footerDivLikes} href="./faq">FAQ</a>
            </div>
            <div className={styles.snsImages}>
              <a className={styles.footerDivLikes} href="https://www.youtube.com/results?search_query=코드잇_판다마켓" target="_blank"><img src="/images/sns/ic_youtube.svg" alt="youtube" /></a>
              <a className={styles.footerDivLikes} href="https://www.facebook.com/" target="_blank"><img src="/images/sns/ic_fb.svg" alt="facebook" /></a>
              <a className={styles.footerDivLikes} href="https://www.instagram.com/" target="_blank"><img src="/images/sns/ic_instagram.svg" alt="instagram" /></a>
              <a className={styles.footerDivLikes} href="https://www.twitter.com/" target="_blank"><img src='/images/sns/ic_twitter.svg' alt="twitter" /></a>
            </div>
          </>
        )}
<<<<<<< HEAD
=======
        <div className={type === 'mobile' ? styles.footerBottom : ''}>
          <div className={styles.footerLink}>
            <a className={styles.footerDivLikes} href="./privacy">Privacy Policy</a>
            <a className={styles.footerDivLikes} href="./faq">FAQ</a>
          </div>
          <div className={styles.snsImages}>
            <a className={styles.footerDivLikes} href="https://www.youtube.com/results?search_query=코드잇_판다마켓" target="_blank"><img src="/images/sns/ic_youtube.svg" alt="youtube" /></a>
            <a className={styles.footerDivLikes} href="https://www.facebook.com/" target="_blank"><img src="/images/sns/ic_fb.svg" alt="facebook" /></a>
            <a className={styles.footerDivLikes} href="https://www.instagram.com/" target="_blank"><img src="/images/sns/ic_instagram.svg" alt="instagram" /></a>
            <a className={styles.footerDivLikes} href="https://www.twitter.com/" target="_blank"><img src='/images/sns/ic_twitter.svg' alt="twitter" /></a>
          </div>
        </div>
>>>>>>> db59084 (Refactor: 중복되는 코드 정리)
      </div>
    </footer>
  );
}
=======
        <div className={styles.footerLink}>
          <a className={styles.footerDivLikes} href="./privacy">Privacy Policy</a>
          <a className={styles.footerDivLikes} href="./faq">FAQ</a>
        </div>
        <div className={styles.snsImages}>
          <a className={styles.footerDivLikes} href="https://www.youtube.com/results?search_query=코드잇_판다마켓" target="_blank"><img src="/images/sns/ic_youtube.svg" alt="youtube" /></a>
          <a className={styles.footerDivLikes} href="https://www.facebook.com/" target="_blank"><img src="/images/sns/ic_fb.svg" alt="facebook" /></a>
          <a className={styles.footerDivLikes} href="https://www.instagram.com/" target="_blank"><img src="/images/sns/ic_instagram.svg" alt="instagram" /></a>
          <a className={styles.footerDivLikes} href="https://www.twitter.com/" target="_blank"><img src='/images/sns/ic_twitter.svg' alt="twitter" /></a>
        </div>
=======
>>>>>>> 653129e (Feat: 커스텀훅(useBreakpoint)이용하여 반응형구현)
      </div>
    </footer>
<<<<<<< HEAD
  )
<<<<<<< HEAD
}

export default Footer;
>>>>>>> 60cd233 (Feat: pagination기능 구현)
=======
}
>>>>>>> b606bca (Rename: 컨벤션 지키기)
=======
  );
}
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
