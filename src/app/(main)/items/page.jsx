import ProductsBest from "@/components/ui/ProductsList/ProductsBest";
import ProductsList from "@/components/ui/ProductsList/ProductsList";

export default function ItemsPage() {
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
