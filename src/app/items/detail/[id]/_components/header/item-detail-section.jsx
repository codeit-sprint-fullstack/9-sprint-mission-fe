import { ItemTitleSection } from "./item-title-section"

export function ItemDetailSection({ item }) {
  return (
    <section className="container w-full items-center pb-4 mb-6 border-b border-gray-200">
      <ItemTitleSection item={item} />
      {/* 상품 태그 */}
    </section >
  )
}
