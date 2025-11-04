import Image from "next/image";

export default function BestItemCard({ item }) {
  return (
    <article>
      <div className="bg-[#F9FAFB] rounded-lg mb-10 mt-7">
        <Image
          src="/img_badge.png"
          alt="badge"
          width={130}
          height={100}
          className="px-4"
        />
        <div className="flex items-center justify-center gap-1 p-3">
          <div className="p-1 flex flex-col gap-5">
            <div className="flex justify-center items-center gap-10">
              <p className="font-bold text-xl">{item.content}</p>
              <div className="border border-[#E5E7EB] rounded-lg p-2 bg-white">
                <Image src="/img_71.png" alt="img" width={70} height={50} />
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center justify-center">
                <p className="text-[#4B5563] text-sm">{item.id}</p>
                <Image src="/ic_heart.png" alt="heart" width={15} height={15} />
                <p className="text-sm text-[#4B5563] ">9999+</p>
              </div>
              <p className="text-[#9CA3AF] text-sm">
                {new Date(item.createdAt).toLocaleDateString("ko-KR")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
