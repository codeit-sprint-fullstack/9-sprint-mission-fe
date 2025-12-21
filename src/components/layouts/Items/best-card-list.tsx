import Link from "next/link";

import { BestCard } from "@/components/ui/card/best-card";
import type { Item } from "@/types/item";
import { paths } from "#/config/paths";

interface BestCardListProps {
  items: Item[];
}

export function BestCardList({ items }: BestCardListProps) {
  return (
    <div className="grid grid-cols-4 gap-4 cursor-pointer">
      {items.map((item) => (
        <Link
          key={item.id}
          href={paths.app.itemDetail.getHref(item.id)}
          className="cursor-pointer"
        >
          <BestCard
            name={item.name}
            price={item.price}
            images={item.images}
            likes={item._count.itemLikes}
          />
        </Link>
      ))}
    </div>
  );
}