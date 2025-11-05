import Image from "next/image";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export default function ItemComments({ item, createdAt }) {
  return (
    <div>
      <div className="bg-gray-100 rounded-lg flex flex-col p-3 mt-5">
        <div className="flex justify-between">
          <p className="text-xl mb-5">{item.content}</p>
          <div className="flex">⋮</div>
        </div>
        <div className="flex items-center gap-1">
          <Image src="/ic_profile.png" alt="profile" width={20} height={20} />
          <p className="text-[#4B5563]">{item.id}</p>
        </div>
        <p className="text-[#9CA3AF] text-sm px-4">
          {dayjs(createdAt).fromNow()}
        </p>
      </div>
      <div className="border-b border-gray-200 my-4"></div>
    </div>
  );
}
