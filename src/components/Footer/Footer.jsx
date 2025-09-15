import facebookIcon from '../../assets/img/ic_facebook.png';
import twitterIcon from '../../assets/img/ic_twitter.png';
import youtubeIcon from '../../assets/img/ic_youtube.png';
import instagramIcon from '../../assets/img/ic_instagram.png';

export function Footer() {
  return (
    <footer id="footer">
      <div id="footer-box">
        <p id="copyright">©codeit - 2024</p>
        <ul id="cs-list">
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>
        <ul id="sns-list">
          <li><a href="https://facebook.com" target='_blank'><img src={ facebookIcon } /></a></li>
          <li><a href="https://x.com" target='_blank'><img src={ twitterIcon } /></a></li>
          <li><a href="https://youtube.com" target='_blank'><img src={ youtubeIcon } /></a></li>
          <li><a href="https://instagram.com" target='_blank'><img src={ instagramIcon } /></a></li>
        </ul>
      </div>
    </footer>
  );
}