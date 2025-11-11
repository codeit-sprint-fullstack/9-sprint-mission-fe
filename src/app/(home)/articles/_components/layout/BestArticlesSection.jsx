import { getArticlesList } from "@/lib/services/articlesServices";
import BestArticleItem from "../ui/BestArticleItem";

export default async function BestArticlesSection() {
  const pageSize = 3;
  const articles = await getArticlesList({ pageSize });
  const list = articles.list;
  //console.log(list);

  return (
    <section>
      <h2 className="text-(--secondary-800) text-xl font-bold">
        베스트 게시글
      </h2>
      <div id="best-post-list" className="flex w-full gap-6 mt-6">
        {list.map((article) => {
          return <BestArticleItem key={article.id} article={article} />;
        })}
      </div>
    </section>
  );
}
