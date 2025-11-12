import PageContainer from "@/components/common/PageContainer";
import BestItem from "@/components/ui/Best/BestItem";
import Item from "@/components/ui/Item/Item";
import Post from "@/app/Post/page";
import { getArticles } from "@/lib/services/ItemApi";

export const dynamic = "force-dynamic";

export default async function Home() {
  const articles = await getArticles();
  return (
    <PageContainer>
      <BestItem items={articles} />
      <Item items={articles} />
    </PageContainer>
  );
}
