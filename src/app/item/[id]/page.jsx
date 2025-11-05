"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PageContainer from "@/components/common/PageContainer";
import ItemDetail from "@/components/ui/Item/ItemDetail";

export default function ItemDetailPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadItem() {
      try {
        const items = await fetch(`/api/item-list/${id}`).then((res) =>
          res.json()
        );
        console.log(items);
        const item = items;
        setItem(item);
      } catch (err) {
        setError(err);
      }
    }

    loadItem();
  }, [id]);
  if (error) {
    console.log(error);
  }
  console.log(item);
  return (
    <PageContainer>
      <ItemDetail item={item} />
    </PageContainer>
  );
}
