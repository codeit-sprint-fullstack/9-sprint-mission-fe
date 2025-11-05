import { getArticles } from "@/lib/services/ItemApi";

export async function GET() {
  try {
    const articles = await getArticles();
    return Response.json(articles);
  } catch (error) {
    console.error(error);
    return Response.json(
      { error: "상품 목록을 가져오는데 실패했습니다" },
      { status: 500 }
    );
  }
}
