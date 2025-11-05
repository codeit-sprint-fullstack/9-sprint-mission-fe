import BestArticlesSection from "./_components/layout/BestArticlesSection";
import MainArticlesSection from "./_components/layout/MainArticlesSection";

export default async function Articles({ searchParams }) {
  const keyword = (await searchParams).keyword;
  console.log(keyword);
  return (
    <div className="w-300 mt-6">
      <BestArticlesSection />
      <MainArticlesSection keyword={keyword} />
    </div>
  );
}
