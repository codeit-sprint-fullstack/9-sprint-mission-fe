import Image from "next/image";
import PandaLogo from "@/public/images/Group19.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[70px]  px-25  border-b border-[#DFDFDF] bg-[#fff] ">
      <div className="flex justify-center items-center ">
        <Image
          loading="eager"
          src={PandaLogo}
          alt="pandaLogo"
          className=" w-[153px] pt-[5.017px] pb-[5.848px] px-0 m-[10px_43px_9px_0] justify-center shrink-0"
        />
        <nav className="fex justify-center items-center">
          <Link
            href="/page2"
            className="w-[109px] h-[69px] p-[24px_16px_24px_15px] text-center font-pretendard text-[18px] text-[#3692FF] font-bold cursor-pointer"
          >
            자유게시판
          </Link>
          <Link
            href="/page3"
            className="w-[109px] h-[69px] p-[24px_23px_24px_23px] text-center font-pretendard text-[18px] font-bold  cursor-pointer"
          >
            중고게시판
          </Link>
        </nav>
      </div>
      <div className=" bg-[#3692FF] text-white px-[23px] py-3 my-3.5 rounded-lg gap-2.5">
        <button className="">로그인</button>
      </div>
    </header>
  );
}
