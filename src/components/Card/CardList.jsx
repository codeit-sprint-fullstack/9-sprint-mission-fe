import Card from "./Card";
import styles from './CardList.module.css'

const dummyData =[
  { title: '아이패드 미니 팝니다', price: '500,000'},
  { title: '아이패드 미니 팝니다', price: '500,000'},
  { title: '아이패드 미니 팝니다', price: '500,000'},
  { title: '아이패드 미니 팝니다', price: '500,000'},
  { title: '아이패드 미니 팝니다', price: '500,000'},
];

function CardList() {
  return (
    <div className={styles.cardContainer}>
      {dummyData.map((item) => (
        <Card key={item} title={item.title} price={item.price}/>
      ))}
    </div>
  )
}


export default CardList;