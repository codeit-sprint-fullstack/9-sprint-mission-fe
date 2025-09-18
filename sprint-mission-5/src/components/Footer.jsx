import React from 'react';
import "./Footer.module.css"

const Footer = () => {
  <footer className="footerContainer">
    <div className="footerInner">
      <div className="footerText">
        <h4>©codeit - 2024</h4>
      </div>

      <div className="centerText">
        <a href="/privacy" className="centerSection">
          <h4>Privacy Policy</h4>
        </a>

        <a href="/faq" className="centerSection">
          <h4>FAQ</h4>
        </a>
      </div>

      <div className="snsButton">
        <a href="https://www.facebook.com" target="_blank">
          <img src="facebook.png" alt="페이스북" />
        </a>
        <a href="https://www.twitter.com" target="_blank">
          <img src="twitter.png" alt="트위터" />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <img src="youtube.png" alt="유튜브" />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <img src="instagram.png" alt="인스타그램" />
        </a>
      </div>
    </div>
  </footer>

}

export default Footer;