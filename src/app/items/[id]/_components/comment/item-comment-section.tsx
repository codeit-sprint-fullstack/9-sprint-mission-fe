'use client';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import CommentEmptyImg from '@/assets/article/Img_reply_empty.svg';
import DefaultImg from '@/assets/logo.svg';
import { formatDate } from '@/libs/utils/format';
import { itemService } from '@/services/item-service';
import type { ItemComment } from '@/types/item';

import { DropdownContent } from '../dropdown-content';

export function ItemCommentSection({ itemId }: { itemId: string }) {
  const { data: item } = useQuery({
    queryKey: ['item', itemId],
    queryFn: () => itemService.getItemById(itemId),
  });

  const comments: ItemComment[] = item?.data.itemComments || [];

  return (
    <section className="flex list-none flex-col gap-6 no-underline">
      {comments && comments.length > 0 ? (
        comments.map((comment) => (
          <li
            key={comment.id}
            className="border-2.5 flex flex-col gap-6 border border-t-0 border-r-0 border-l-0 border-solid border-gray-300 bg-gray-50 px-0 py-3"
          >
            <div className="flex justify-between">
              <DropdownContent comment={comment} />
            </div>
            <div className="mb-1.5 flex items-center gap-2">
              <Image
                src={comment.author?.userProfile?.photoUrl || DefaultImg}
                alt="avatar"
                width={32}
                height={32}
                className="h-8 w-8 shrink-0 rounded-full object-cover"
              />
              <div>
                <span className="font-pretendard text-xs leading-4.5 text-gray-600">
                  {comment.author?.nickname}
                </span>
                <p className="text-xs leading-4.5 text-gray-400">
                  {formatDate(comment.createdAt)}
                </p>
              </div>
            </div>
          </li>
        ))
      ) : (
        <>
          <Image
            className="mb-4 self-center"
            width={140}
            height={140}
            src={CommentEmptyImg}
            alt="comment-empty-img"
          />
          <p className="font-pretendard text-center leading-6.5 text-gray-400">
            아직 댓글이 없어요,
            <br />
            지금 댓글을 달아보세요!
          </p>
        </>
      )}
    </section>
  );
}
