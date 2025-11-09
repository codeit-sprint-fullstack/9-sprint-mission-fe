import Image from "next/image";

export default function BestItemCard({ item }) {
  return (
    <article className="w-[360px]">
      <div className="bg-[#F9FAFB] rounded-lg mb-10 mt-7 flex flex-col justify-between">
        <Image
          src="/img_badge.png"
          alt="badge"
          width={130}
          height={100}
          className="px-4"
        />
        <div className="flex flex-col gap-5 p-4">
          <div className="p-1 flex gap-5">
            <p className="font-bold text-lg leading-tight line-clamp-2 min-h-12 w-[300px]">
              {item.title}
            </p>
            <div className="border border-[#E5E7EB] rounded-lg p-2 bg-white shrink-0">
              <Image src="/img_71.png" alt="img" width={70} height={50} />
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
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
    </article>
  );
}
