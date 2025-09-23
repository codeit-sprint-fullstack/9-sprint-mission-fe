import React from 'react';
import facebookIcon from '/resources/img/ic_facebook.png';
import twitterIcon from '/resources/img/ic_twitter.png';
import youtubeIcon from '/resources/img/ic_youtube.png';
import instagramIcon from '/resources/img/ic_instagram.png';
import styles from "./Footer.module.css"



const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>
        <div className={styles.footerText}>
          <h4>©codeit - 2024</h4>
        </div>

        <div className={styles.centerText}>
          <a href="/privacy" className="centerSection">
            <h4>Privacy Policy</h4>
          </a>

          <a href="/faq" className="centerSection">
            <h4>FAQ</h4>
          </a>
        </div>

        <div className={styles.snsButton}>
          <a href="https://www.facebook.com" target="_blank">
            <img src={facebookIcon} alt="페이스북" />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            <img src={twitterIcon} alt="트위터" />
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <img src={youtubeIcon} alt="유튜브" />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            <img src={instagramIcon} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );

}

export default Footer;