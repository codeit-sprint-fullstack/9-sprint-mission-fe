import ProductsDetailPage from "@/components/ui/ProductsList/ProductsDetailPage";
import { getProductById } from "@/lib/services/products";
import React from "react";

export default async function ItemPage({ params }) {
  const { id } = await params;
  const product = await getProductById(id);

  return (
    <>
      <main>
        <ProductsDetailPage product={product} />
      </main>
    </>
  );
}
