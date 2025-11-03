import facebookIcon from "@/assets/img/ic_facebook.png";
import twitterIcon from "@/assets/img/ic_twitter.png";
import youtubeIcon from "@/assets/img/ic_youtube.png";
import instagramIcon from "@/assets/img/ic_instagram.png";
import Image from "next/image";

export function Footer() {
  return (
    <footer
      id="footer"
      className="flex w-full justify-center items-start bg-(--secondary-900) text-center"
    >
      <div
        id="footer-box"
        className="flex w-480 h-40 py-8 px-50 justify-between items-start text-center max-[120rem]:w-full max-[74.9rem]:px-6 max-[46.4rem]:px-4 max-[46.4rem]:flex-wrap-reverse max-[46.4rem]:h-auto"
      >
        <p
          id="copyright"
          className="text-(--secondary-400) text-base font-normal max-[46.4rem]:w-full max-[46.4rem]:mt-6 max-[46.4rem]:mb-8 max-[46.4rem]:text-left"
        >
          ©codeit - 2024
        </p>

        <ul id="cs-list" className="flex items-start gap-7.5">
          <li>
            <a
              href="/privacy"
              className="text-(--secondary-200) text-base font-normal"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="text-(--secondary-200) text-base font-normal"
            >
              FAQ
            </a>
          </li>
        </ul>

        <ul id="sns-list" className="flex items-start gap-3">
          <li>
            <a href="https://facebook.com" target="_blank">
              <Image
                src={facebookIcon}
                alt="Facebook icon"
                className="w-5 h-auto" // 원본 CSS: w: 1.25rem (20px)
              />
            </a>
          </li>
          <li>
            <a href="https://x.com" target="_blank">
              <Image
                src={twitterIcon}
                alt="Twitter icon"
                className="w-5 h-auto"
              />
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank">
              <Image
                src={youtubeIcon}
                alt="YouTube icon"
                className="w-5 h-auto"
              />
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank">
              <Image
                src={instagramIcon}
                alt="Instagram icon"
                className="w-5 h-auto"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
