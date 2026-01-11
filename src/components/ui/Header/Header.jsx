import logo from "@/assets/img/logo.png";
import logoText from "@/assets/img/logo_text.png";
import { NavMenuWrap } from "./NavMenuWrap";
import Link from "next/link";
import Image from "next/image";
import NavBtnWarp from "./NavBtnWarp";

export function Header() {
  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full h-[4.4rem] flex justify-center items-center bg-white border-b border-[#dfdfdf] z-999"
    >
      <nav
        id="nav"
        className="flex w-480 h-[4.4rem] px-100 justify-between items-center max-[120rem]:w-full max-[120rem]:px-50 max-[74.9rem]:px-6 max-[46.4rem]:px-4"
      >
        <div
          id="nav-left"
          className="flex items-center gap-6 max-[46.4rem]:gap-2"
        >
          <h1
            id="title"
            className="w-[9.6rem] h-[3.2rem] max-[46.4rem]:w-20 max-[46.4rem]:h-auto"
          >
            <Link className="block w-full h-full" href="/">
              <picture>
                <source
                  media="(max-width: 46.4rem)"
                  srcSet={logoText.src} // logoText가 아닌 logoText.src
                />
                <Image
                  className="w-full h-full object-contain"
                  src={logo}
                  alt="판다마켓 로고"
                />
              </picture>
            </Link>
          </h1>
          <NavMenuWrap />
        </div>
        <NavBtnWarp />
      </nav>
    </header>
  );
}
