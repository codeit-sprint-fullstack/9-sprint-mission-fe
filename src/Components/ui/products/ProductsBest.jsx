import React from "react";
import exam from "@/public/images/eximg.png";
import Image from "next/image";

export default function ProductsBest() {
  return (
    <section>
      <h1>베스트 상품</h1>
      <div className="mt-4">
        <Image src={exam} alt="상품이미지" width={282} height={378} />
      </div>
    </section>
  );
}
