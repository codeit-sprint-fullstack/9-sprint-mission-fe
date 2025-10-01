import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-left">© codeit - 2024</div>

        <nav className="footer-center" aria-label="하단 링크">
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/faq.html">FAQ</a>
        </nav>

        <div className="footer-right social">
          <a href="https://facebook.com">
            <img src="images/social/ic_facebook.png" alt="Facebook" />
          </a>
          <a href="https://twitter.com">
            <img src="images/social/ic_twitter.png" alt="Twitter" />
          </a>
          <a href="https://youtube.com">
            <img src="images/social/ic_youtube.png" alt="YouTube" />
          </a>
          <a href="https://instagram.com">
            <img src="images/social/ic_instagram.png" alt="Instagram" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
