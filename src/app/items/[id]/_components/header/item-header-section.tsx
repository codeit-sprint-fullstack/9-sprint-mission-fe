'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { notFound, useRouter } from 'next/navigation';
import { useState } from 'react';

import EllipsisVertical from '@/assets/icons/ic_ellipsis_vertical.svg';
import DefaultImg from '@/assets/items/Img_default.png';
import { DeleteDialog } from '@/components/ui/dialog/delete-dialog';
import { useDialog } from '@/providers/modal-context';
import { itemService } from '@/services/item-service';

import { ItemAuthor } from './item-author';

export function ItemHeaderSection({ itemId }: { itemId: string }) {
  const queryClient = useQueryClient();
  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [dialogDeleteMessage, setDialogDeleteMessage] = useState<string>('');
  const { openDialog } = useDialog();
  const router = useRouter();

  const {
    data: itemData,
    error,
    isPending,
  } = useQuery({
    queryKey: ['item', itemId],
    queryFn: () => itemService.getItemById(itemId),
  });

  const item = itemData?.data;
  const baseHost =
    process.env.NEXT_PUBLIC_IMAGE_HOST || 'http://127.0.0.1:3005';

  const deleteMutation = useMutation({
    mutationFn: () => itemService.deleteItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['item', itemId],
      });
      openDialog('성공적으로 상품을 삭제하였습니다.');
      router.push('/items');
    },
    onError: (error) => {
      console.error('Failed Delete:', error);
      setDialogDeleteMessage(`삭제 중 오류 발생 ${error.message}`);
      setShowDialog(true);
    },
  });

  const handleOnChange = (name: 'update' | 'delete') => {
    setShowPanel(false);

    if (name === 'update') {
      router.push(`/items/${itemId}/update`);
    }
    if (name === 'delete') {
      setDialogDeleteMessage('정말로 상품을 삭제하시겠어요?');
      setShowDialog(true);
    }
  };

  if (!item) return notFound();
  if (isPending)
    return (
      <div className="container mx-auto py-20 text-center">로딩 중...</div>
    );
  if (error)
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        {error.message}
      </div>
    );

  const displayImage = item.images?.[0]
    ? item.images[0].startsWith('http')
      ? item.images[0]
      : `${baseHost}/${item.images[0]}`
    : DefaultImg;

  return (
    <section className="container mb-6 w-full items-center border-b border-gray-200 pb-4">
      <div className="container flex max-w-480 flex-col md:flex-row md:gap-2.5">
        <div className="relative flex h-85 w-85 shrink-0 items-center md:mr-6 xl:h-121.5 xl:w-121.5">
          <Image
            className="absolute rounded-2xl"
            src={displayImage}
            alt="상품 이미지"
            fill
          />
        </div>

        <div className="flex w-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <h1 className="font-pretendard mt-4 w-full text-base leading-6.5 font-semibold text-gray-800 md:text-xl">
              {item.name}
            </h1>
            <div
              className="relative h-2 w-2 cursor-pointer"
              onClick={() => setShowPanel((prev) => !prev)}
            >
              <Image
                className="flex shrink md:mr-3.5"
                src={EllipsisVertical}
                alt="vertical-dropdown-button"
                width={3}
                height={13}
                unoptimized
              />
              {showPanel && (
                <ul className="absolute -left-20 z-2 mt-2 shrink-0 rounded-xl border border-solid border-gray-200 bg-white">
                  <li className="font-pretendard cursor-point mt-0.5 flex h-10.5 w-31.25 shrink-0 items-center justify-center text-lg leading-6.5 text-gray-800">
                    <button
                      className="border-0 bg-white"
                      onClick={() => handleOnChange('update')}
                    >
                      수정하기
                    </button>
                  </li>
                  <li className="font-pretendard cursor-point mt-0.5 flex h-10.5 w-31.25 shrink-0 items-center justify-center text-lg leading-6.5 text-gray-800">
                    <button
                      className="border-0 bg-white"
                      onClick={() => handleOnChange('delete')}
                    >
                      삭제하기
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
          <h2 className="font-pretendard border-b border-gray-200 pb-4 text-[2rem] leading-8 font-semibold text-gray-800">
            {Number(item.price).toLocaleString()}원
          </h2>
          <h3 className="font-pretendard mt-4 mb-2 text-base leading-6.5 font-semibold text-gray-600">
            상품 소개
          </h3>
          <section className="font-pretendard mb-8 text-lg leading-6.5 text-gray-800">
            {item.description}
          </section>
          <section>
            <h3 className="font-pretendard mb-4 text-base leading-6.5 font-semibold text-gray-600">
              상품 태그
            </h3>
            <ul className="flex gap-4">
              {item.tags?.map((tag) => (
                <li
                  key={tag.id}
                  className="h-9 rounded-3xl bg-gray-100 px-4 py-1.5"
                >
                  <p className="font-pretendard leading-6.5 text-gray-800">
                    {tag.name}
                  </p>
                </li>
              ))}
            </ul>
          </section>
          <ItemAuthor item={item} />
        </div>
      </div>

      {showDialog && (
        <DeleteDialog
          close={() => setShowDialog(false)}
          msg={dialogDeleteMessage}
          deleteClick={() => deleteMutation.mutate()}
        ></DeleteDialog>
      )}
    </section>
  );
}
