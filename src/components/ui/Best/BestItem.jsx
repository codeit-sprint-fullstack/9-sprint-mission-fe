import BestItemCard from "./BestItemCard";

export default function BestItem({ items }) {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="font-bold text-xl mt-10">베스트 게시글</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.isArray(items.data) &&
          items.data
            .slice(0, 3)
            .map((item) => <BestItemCard key={item.id} item={item} />)}
      </div>
    </div>
  );
}
