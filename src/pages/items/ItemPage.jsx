import ItemHeader from "@/components/UI/Nav/ItemHeader"
import DropDown from "@/components/UI/Button/DropDown"
import Footer from "@/components/Footer"
import CardList from "@/components/UI/Card/CardList"
import Input from "@/components/UI/Input/Input"
import styles from './itempage.module.css'

export default function ItemPage() {
  return (
    <>
      <ItemHeader />
      <main className={styles.mainContainer}>

        <div className={styles.bestItemList}>
          <p className={styles.bestItemPara}>베스트 상품</p>
          <CardList type={'favorite'} />
        </div>

        <div>
          <div className={styles.sellItemContainer}>
            <p className={styles.sellItemPara}>판매 중인 상품</p>
            <div className={styles.sellItemFilter}>
              <Input />
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