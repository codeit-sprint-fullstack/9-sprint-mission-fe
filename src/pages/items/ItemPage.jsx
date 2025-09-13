import ItemHeader from "@/components/Nav/ItemHeader"
import DropDown from "@/components/Button/DropDown"
import Footer from "@/components/Footer"
import CardList from "@/components/Card/CardList"
import styles from './itempage.module.css'

export default function ItemPage() {
  return (
    <>
      <ItemHeader />
      <main className={styles.mainContainer}>

        <div className={styles.bestItemList}>
          <p className={styles.bestItemPara}>베스트 상품</p>
          <CardList />
        </div>

        <div>
          <div className={styles.sellItemContainer}>
            <p className={styles.sellItemPara}>판매 중인 상품</p>
            <div className={styles.sellItemFilter}>
              <input className={styles.sellItemInput} placeholder="검색할 상품을 입력해주세요" />
              <button className={styles.sellItemButton} >상품 등록하기</button>
              <DropDown />
            </div>
          </div>
          <CardList />
        </div>
      </main>

      <div>
        {/** pagination */}
        <ul className={styles.pagination}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>
      <Footer />
    </>
  )
}