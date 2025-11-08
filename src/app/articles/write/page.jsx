import React from "react";

export default function WritePage() {
  return (
    <article className="flex flex-col  w-[1200px] gap-8">
      <div className="flex justify-between items-center pb-8">
        <h1 className="text-xl font-bold leading-8 text-#1F2937">
          게시글 쓰기
        </h1>
        <button className="flex h-10 bg-gray-400 px-[23px] py-3 items-center rounded-lg text-[16px] text-gray-100">
          등록
        </button>
      </div>
      <div className="pb-8">
        <h2 className="text-#1F2937 text-[18px] pb-3">*제목</h2>
        <div className="flex h-14 px-6 py-4 bg-gray-100 rounded-xl ">
          <input type="text" placeholder="제목을 입력해주세요." />
        </div>
      </div>
      <div>
        <h2 className="text-#1F2937 text-[18px] pb-3">*내용</h2>
        <div className=" h-[282px] py-4 px-6 bg-gray-100 rounded-lg">
          <input
            type="text"
            placeholder="내용을 입력해주세요."
            className=" w-[1200px] flex items-start gap-2.5 "
          />
        </div>
      </div>
    </article>
  );
}
