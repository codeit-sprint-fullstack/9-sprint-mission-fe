import Link from "next/link";
import DropDown from "../ui/DropDown";
import SearchInput from "../ui/SearchInput";
import MainPostItem from "../ui/MainPostItem";

export default function MainPostsSection() {
  return (
    <section className="mt-10 ">
      <div className="flex justify-between items-center">
        <h2 className="text-(--secondary-900) text-xl font-bold">게시글</h2>
        <Link
          href="/posts/create"
          className="inline-block px-5.75 h-10.5 leading-10.5 border-none rounded-lg bg-(--primary-100) text-center text-(--secondary-100) text-base font-semibold"
        >
          글쓰기
        </Link>
      </div>
      <div className="flex gap-4 mt-6">
        <SearchInput />
        <DropDown />
      </div>
      <div>
        <MainPostItem />
      </div>
    </section>
  );
}
