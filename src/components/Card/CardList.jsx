import Card from "./Card";

const dummyData =[
  { title: 'item1', price: '500,000'},
  { title: 'item1', price: '500,000'},
  { title: 'item1', price: '500,000'},
  { title: 'item1', price: '500,000'},
  { title: 'item1', price: '500,000'},
];

function CardList() {
  return (
    <>
      {dummyData.map((item) => (
        <Card key={item} title={item.title} price={item.price}/>
      ))}
    </>
  )
}


export default CardList;