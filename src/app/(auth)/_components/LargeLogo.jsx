import Link from "next/link";
import Image from "next/image";
import titleLogo from "@/assets/img/logo_large.png";

export default function LargeLogo() {
  return (
    <h1 className="w-99 mx-auto mb-10">
      <Link href="/">
        <Image src={titleLogo} alt="판다마켓 로고" className="w-full" />
      </Link>
    </h1>
  );
}
