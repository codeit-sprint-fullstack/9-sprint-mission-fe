
import icFacebook from '../assets/images/ic_facebook.png';
import icTwitter from '../assets/images/ic_twitter.png';
import icYoutube from '../assets/images/ic_youtube.png';
import icInstagram from '../assets/images/ic_instagram.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">codeit-2024</div>
        <nav className="footer-center" aria-label="푸터 내비게이션">
          <a href="/privacy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
          <a href="/faq.html" target="_blank" rel="noopener noreferrer">FAQ</a>
        </nav>
        <div className="footer-right" aria-label="SNS">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src={icFacebook} alt="페이스북" />
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src={icTwitter} alt="트위터" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
            <img src={icYoutube} alt="유튜브" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src={icInstagram} alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;