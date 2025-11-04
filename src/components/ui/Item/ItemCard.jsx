import Image from "next/image";

export default function ItemCard({ item }) {
  return (
    <div className="max-w-6xl mx-auto px-4 flex flex-col mb-4">
      <div className="flex flex-col w-full bg-[#FCFCFC] gap-3 p-4">
        <div className="flex justify-between">
          <p className="font-bold text-xl">{item.content}</p>
          <div className="border border-[#E5E7EB] rounded-lg p-2 bg-white">
            <Image src="/img_71.png" alt="img" width={70} height={50} />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Image src="/ic_profile.png" alt="profile" width={20} height={20} />
            <p className="text-[#4B5563]">{item.id}</p>
            <p className="text-[#9CA3AF] text-sm px-4">
              {new Date(item.createdAt).toLocaleDateString("ko-KR")}
            </p>
          </div>
          <div className="flex items-center gap-2 px-2">
            <Image src="/ic_heart.png" alt="heart" width={15} height={15} />
            <p className="text-sm text-[#4B5563] ">9999+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
