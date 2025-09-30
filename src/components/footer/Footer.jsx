import ic_facebook  from '@/img/ic_facebook.svg';
import ic_instagram  from '@/img/ic_instagram.svg';
import ic_youtube   from '@/img/ic_youtube.svg';
import ic_twitter   from '@/img/ic_twitter.svg';
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
          <p>©codeit - 2024</p>
        <div className={styles.links}>
            <a href="privacy.html">Privacy Policy</a>
            <a href="faq.html">FAQ</a>
        </div> 
        <div className={styles.icons}> 
            <img src={ic_facebook} alt="페이스북 이미지" />
            <img src={ic_twitter} alt="트위터 이미지" />
            <img src={ic_instagram} alt="인스타그램 이미지" />
            <img src={ic_youtube} alt="유튜브 이미지" />
        </div>
    </footer>
  );
}

export default Footer;
