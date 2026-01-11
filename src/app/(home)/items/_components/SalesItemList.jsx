import { ItemCard } from "./ItemCard";

export function SalesItemList({ itemList }) {
  return (
    <div
      className="grid 
    grid-cols-2 gap-y-8 gap-x-2
    md:grid-cols-3 md:gap-y-10 md:gap-x-4
    xl:grid-cols-5 xl:gap-x-6"
    >
      {itemList.map((item) => (
        <ItemCard key={item.id} itemValue={item} />
      ))}
    </div>
  );
}
