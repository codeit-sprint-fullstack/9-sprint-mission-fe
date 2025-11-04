import BestPostItem from "../ui/BestPostItem";

export default function BestPostsSection() {
  return (
    <section>
      <h2 className="text-(--secondary-900) text-xl font-bold">
        베스트 게시글
      </h2>
      <div id="best-post-list" className="flex w-full gap-6 mt-6">
        <BestPostItem />
      </div>
    </section>
  );
}
