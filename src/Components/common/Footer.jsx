import Image from "next/image";
import Facebook from "@/public/svg/ic_facebook.svg";
import instagram from "@/public/svg/ic_instagram.svg";
import x from "@/public/svg/ic_twitter.svg";
import youtube from "@/public/svg/Group.svg";

export default function Footer() {
  return (
    <footer className=" flex  items-center w-full bg-[#111827] py-8 px-[200px]  h-40 shrink-0">
      <div className="flex justify-between  mx-auto w-full">
        <div>
          <p className="text-white">@Codeit - 2025</p>
        </div>
        <div>
          <ul className="flex gap-5">
            <li className="text-white">Privacy Policy</li>
            <li className="text-white">FAQ</li>
          </ul>
        </div>
        <nav className="flex gap-3 justify-center items-center">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <Image src={Facebook} alt="Facebook" />
          </a>
          <a href="https://x.com/?lang=ko" target="_blank" aria-label="X">
            <Image src={x} alt="x" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            aria-label="youtube"
          >
            <Image src={youtube} alt="youtube" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            aria-label="instagram"
          >
            <Image src={instagram} alt="instagram" />
          </a>
        </nav>
      </div>
    </footer>
  );
}
