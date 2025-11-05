import { getArticlesList } from "@/lib/services/articlesServices";
import Link from "next/link";
import DropDown from "../ui/DropDown";
import SearchInput from "../ui/SearchInput";
import MainArticleItem from "../ui/MainArticleItem";

export default async function MainArticlesSection({ keyword }) {
  console.log(keyword);
  const articles = await getArticlesList({ keyword });
  const list = articles.list;
  //console.log(list);
  return (
    <section className="mt-10 ">
      <div className="flex justify-between items-center">
        <h2 className="text-(--secondary-800) text-xl font-bold">게시글</h2>
        <Link href="/articles/create" className="btns">
          글쓰기
        </Link>
      </div>
      <div className="flex gap-4 mt-6">
        <SearchInput />
        <DropDown />
      </div>
      <div>
        {list.map((article) => {
          return <MainArticleItem key={article.id} article={article} />;
        })}
      </div>
    </section>
  );
}
