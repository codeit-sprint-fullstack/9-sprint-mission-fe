import Link from "next/link";

import { Card } from "@/components/ui/card";
import type { Item } from "@/types/item";
import { paths } from "#/config/paths";

interface CardListProps {
  items: Item[];
}

export function CardList({ items }: CardListProps) {
  return (
    <div className="grid grid-cols-4 gap-4 cursor-pointer">
      {items.map((item) => (
        <Link
          key={item.id}
          href={paths.app.itemDetail.getHref(item.id)}
          className="cursor-pointer"
        >
          <Card
            type=""
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