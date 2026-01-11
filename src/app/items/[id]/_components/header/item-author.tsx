import Image from 'next/image';

import DefaultAvatar from '@/assets/ic_default_avatar.svg';
import { truncateDate } from '@/libs/utils/format';
import type { Item } from '@/types/item';

import { ItemLikeButton } from './like/item-like-btn';

export function ItemAuthor({ item }: { item: Item }) {
  console.log(item);
  return (
    <div className="container flex items-baseline justify-between">
      <div className="mb-6 flex text-nowrap">
        <div className="relative h-10 w-10 rounded-full bg-gray-300">
          <Image
            src={item.user?.userProfile?.photoUrl || DefaultAvatar}
            alt="author-avatar"
            className="absolute"
            fill
          />
        </div>
        <div>
          <p className="font-pretendard ml-4 text-sm leading-6 font-medium text-gray-600">
            {item.user?.nickname}
          </p>
          <span className="font-pretendard ml-4 text-sm leading-6 text-gray-400">
            {truncateDate(item.updatedAt, 10)}
          </span>
        </div>
      </div>
      <div className="mx-4 flex h-6 items-baseline border border-dotted border-gray-200 md:mx-8"></div>
      <ItemLikeButton
        itemId={item.id}
        initialLikeCount={item._count.itemLikes}
      />
    </div>
  );
}
