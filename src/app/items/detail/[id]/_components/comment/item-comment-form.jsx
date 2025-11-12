
export function ItemCommentForm({ item, action }) {

  return (
    <section className="container w-full mb-8 md:max-w-7xl">
      <h3 className="font-pretendard font-semibold mb-2 mt-6 leading-6.5">
        문의하기
      </h3>
      <form action={action}>
        <input type="hidden" name="userId" value={item.userId} />
        <input type="hidden" name="itemId" value={item.id} />
        <textarea
          name="context"
          className="max-w-85.75 md:max-w-7xl  w-full h-32.25 md:h-26 p-2.5 border-0 rounded-md resize-none mb-2 bg-gray-100 placeholder:text-gray-400 placeholder:text-sm placeholder:leading-6"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <div className="flex justify-end">
          <button className="flex justify-center items-center py-3 px-5.75 grow-0 bg-gray-400 border-none rounded-md text-white whitespace-nowrap cursor-pointer hover:bg-primary-100">
            등록
          </button>
        </div>
      </form>
    </section>
  )
}
