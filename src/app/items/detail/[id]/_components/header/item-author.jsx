import Image from "next/image"

import DefaultAvatar from '@/assets/ic_default_avatar.svg'
import HeartIcon from '@/assets/icons/ic_heart.svg'
import { truncateDate } from "@/libs/utils/format"

export function ItemAuthor({ item }) {
  return (
    <div className="container flex items-baseline justify-between">
      <div className="flex text-nowrap mb-6">
        <div className="relative w-10 h-10 bg-gray-300 rounded-full">
          <Image
            src={item.user?.userProfile?.photoUrl || DefaultAvatar}
            alt="author-avatar"
            className="absolute"
            fill
          />
        </div>
        <div>
          <p className="font-pretendard text-gray-600 text-sm font-medium leading-6 ml-4">{item.user?.name}</p>
          <span className="font-pretendard text-gray-400 text-sm leading-6 ml-4">{truncateDate(item.user?.updatedAt, 10)}</span>
        </div>
      </div>
      <div className="flex items-baseline h-6 border border-dotted border-gray-200 mx-4 md:mx-8"></div>
      <button className="flex items-center gap-1 border border-solid border-gray-200 rounded-4xl bg-white cursor-pointer px-3 py-1">
        <div className="relative text-base w-6 h-6 md:w-8 md:h-8 shrink-0">
          <Image
            className="object-cover"
            fill
            src={HeartIcon}
            alt="heart-icon"
          />
        </div>
        <span className="font-pretendard font-medium leading-6.5 text-gray-500">
          123
        </span>
      </button>
    </div>
  )
}