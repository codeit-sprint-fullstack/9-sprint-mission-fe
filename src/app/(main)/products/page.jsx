import ProductsBest from "@/components/ui/products/ProductsBest";
import ProductsList from "@/components/ui/products/ProductsList";

export default function MarketPage() {
  return (
    <main className="flex flex-col gap-10">
      <section>
        <ProductsBest />
      </section>
      <section>
        <ProductsList />
      </section>
    </main>
  );
}
