import ItemHeader from "@/components/UI/Nav/ItemHeader"
import DropDown from "@/components/UI/Button/DropDown"
import Footer from "@/components/UI/Footer/Footer"
import CardList from "@/components/UI/Card/CardList"
import Input from "@/components/UI/Input/Input"
import styles from './itempage.module.css'
import { Pagination } from "@/components/Pagination/Pagination"
import { usePagination } from "@/hooks/usePagination"

export default function ItemPage() {

  const {
    currentPage,
    itemsPerPage,
    setTotalItems,
    goToPage,
    totalPages

  } = usePagination(1, 10)
  
  console.log(totalPages)
  return (
    <>
      <ItemHeader />
      <main className={styles.mainContainer}>

        <div className={styles.bestItemList}>
          <p className={styles.bestItemPara}>베스트 상품</p>
          <CardList type={'favorite'} currentPage={currentPage} itemsPerPage={itemsPerPage} setTotalItems={setTotalItems}/>
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
          <CardList currentPage={currentPage} itemsPerPage={itemsPerPage} setTotalItems={setTotalItems} />
        </div>
      </main>

      <div>
        {/** pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      </div>
      <Footer />
    </>
  )
}