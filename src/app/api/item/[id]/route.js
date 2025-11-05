import { getArticleById } from "@/lib/services/ItemApi";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    const article = await getArticleById(id);
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(
      { error: "상품 데이터를 가져오는데 실패했습니다" },
      { status: 500 }
    );
  }
}
