import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItems } from "@/api/ProductMyService";

export function ItemsDetailPage() {
  const { itemId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!itemId) return;

    setLoading(true);
    const fetchData = async () => {
      try {
        const data = await getItems(itemId);
        setItems(data.data);
      } catch (error) {
        console.error('Failed fetchItems', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemId]);

if(itemId === undefined) return <div>mission</div>;
  return (
    <>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
      <div>...미션내용 빈페이지 id:{itemId}</div>
    </>
  );
} 