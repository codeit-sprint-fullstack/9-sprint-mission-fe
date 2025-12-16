"use client";
import Image from "next/image";
import PandaLogo from "@/public/images/Group19.png";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";

export default function Header() {
  const { user, logout, isInitialized } = useAuth();
  const router = useRouter();

  if (!isInitialized) return null;

  return (
    <header className="flex justify-between items-center w-full  h-[70px] px-25   border-b border-[#DFDFDF] bg-white ">
      <div className="flex justify-center items-center ">
        <Link href="/">
          <Image
            loading="eager"
            src={PandaLogo}
            alt="pandaLogo"
            className=" w-[153px] pt-[5.017px] pb-[5.848px] px-0 m-[10px_43px_9px_0] justify-center shrink-0"
          />
        </Link>
        <nav className="fex justify-center items-center">
          <Link
            href="/articles"
            className="w-[109px] h-[69px] p-[24px_16px_24px_15px] text-center font-pretended text-[18px] text-[#3692FF] font-bold cursor-pointer"
          >
            자유게시판
          </Link>
          <Link
            href="/items"
            className="w-[109px] h-[69px] p-[24px_23px_24px_23px] text-center font-pretended text-[18px] font-bold  cursor-pointer"
          >
            중고게시판
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-4 pr-6">
        {user ? (
          <div className="flex items-center justify-center gap-2">
            <Image
              src={user.image}
              width={40}
              height={40}
              alt="프로필 이미지"
            />
            <span className="text-gray-600 text-[18px]  font-normal">
              {user.nickname} 님
            </span>
            <button
              onClick={logout}
              className="flex items-center justify-center bg-gray-200 text-gray-800 text-[16px] w-20 h-10  rounded-lg "
            >
              로그아웃
            </button>
          </div>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className=" flex  justify-center items-center bg-[#3692FF] text-[16px] text-white px-[23px] py-3 rounded-lg gap-2.5 leading-[26px]"
          >
            로그인
          </button>
        )}
      </div>
    </header>
  );
}
