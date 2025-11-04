import searchIcon from "@/assets/img/ic_search.svg";
import Image from "next/image";

export default function SearchInput() {
  return (
    <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-4 py-2.25 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
      <Image src={searchIcon} alt="검색" />
      <input
        id="serch-input"
        className="h-6 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
        type="text"
        placeholder="검색할 상품을 입력해주세요"
      />
    </div>
  );
}
