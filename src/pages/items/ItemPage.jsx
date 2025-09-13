import ItemHeader from "@/components/Nav/ItemHeader"
import Button from "@/components/Button/Button"
import Footer from "@/components/Footer"
import CardList from "@/components/Card/CardList"

export default function ItemPage() {
  return (
    <>
      <ItemHeader />

      <div>
        <p>베스트 상품</p>
        <CardList />
      </div>

      <div>
        <div>
          <p>판매 중인 상품</p>
          <input />
          <button>상품 등록하기</button>
          <Button />
        </div>
        <CardList />
      </div>

      <div>
        {/** pagination */}
      </div>

      <Footer />
    </>
  )
}