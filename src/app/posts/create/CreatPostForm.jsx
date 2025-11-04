"use client";

export default function CreatPostForm() {
  return (
    <from className="w-full ">
      <div className="flex justify-between items-center">
        <h2 className="text-(--secondary-900) text-xl font-bold">
          게시글 쓰기
        </h2>
        <input
          type="submit"
          value="등록"
          className="inline-block px-5.75 h-10.5 leading-10.5 border-none rounded-lg bg-(--primary-100) text-center text-(--secondary-100) text-base font-semibold"
        />
      </div>
      <div className="flex flex-col mt-8 gap-6">
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold">*제목</h3>
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
            <input
              id="title"
              className="h-6 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              type="text"
              placeholder="제목을 입력해주세요"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold">*내용</h3>
          <div className="flex grow items-center gap-1 rounded-xl bg-(--secondary-100) px-6 py-4 focus-within:border focus-within:border-solid focus-within:border-(--primary-100)">
            <textarea
              id="context"
              className="h-52 w-full border-none bg-transparent text-base font-normal leading-6.5 placeholder:text-(--secondary-400) focus:outline-none"
              type="text"
              placeholder="내용을 입력해주세요"
            />
          </div>
        </div>
      </div>
    </from>
  );
}
