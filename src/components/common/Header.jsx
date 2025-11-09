import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex sm:flex-row md:flex-row justify-between max-w-6xl mx-auto px-4 py-2 items-center ">
      <div className=" py-4 flex sm:flex-row md:flex-row items-center gap-10">
        <Link href="/">
          <div
            className={`text-2xl font-black flex sm:flex-row md:flex-row items-center justify-center gap-3 text-[#3692FF] font-[family-name:var(--font-rokaf-sans)]`}
          >
            <Image src="/panda.png" alt="panda" width={40} height={40} />
            판다마켓
          </div>
        </Link>
        <nav>
          <ul className="flex space-x-6 font-bold">
            <li className="text-[#3692FF] font-black">자유게시판</li>
            <li>중고마켓</li>
          </ul>
        </nav>
      </div>

      <div className="bg-[#3692FF] w-23 h-10 p-2 rounded-lg text-white font-bold flex justify-center items-center">
        로그인
      </div>
    </header>
  );
}
