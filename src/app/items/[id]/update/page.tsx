'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useParams, useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  type ItemFormInput,
  type ItemFormOutput,
  itemFormSchema,
} from '@/libs/schemas/item.schema';
import { useDialog } from '@/providers/modal-context';
import { itemService } from '@/services/item-service';
import type { Item } from '@/types/item';

export default function ItemRegistration({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: itemId } = use(params);
  const queryClient = useQueryClient();
  const { openDialog } = useDialog();
  const router = useRouter();

  //update 시 기존 데이터 가져오기
  const { data: itemData } = useQuery({
    queryKey: ['item', itemId],
    queryFn: () => itemService.getItemById(itemId),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ItemFormInput, Item, ItemFormOutput>({
    resolver: zodResolver(itemFormSchema),
    mode: 'onChange', // 실시간 유효성 검사
  });

  useEffect(() => {
    if (itemData) {
      reset({
        name: itemData.data.name ?? '',
        description: itemData.data.description,
        price: String(itemData.data.price),
        tags: Array.isArray(itemData.data.tags)
          ? itemData.data.tags.join(', ')
          : '',
      });
    }
  }, [itemData, reset]);

  const updateMutation = useMutation<Item, Error, ItemFormOutput>({
    mutationFn: async (formData) => {
      const response = await itemService.updateItem(itemId, formData);

      if (!response) {
        throw new Error('서버로부터 응답을 받지 못했습니다.');
      }
      return response.data as Item;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['item', itemId],
      });
      openDialog('업데이트에 성공하였습니다.');
      router.replace(`/items/${itemId}`);
    },
    onError: (error) => {
      console.error(error);
      openDialog(`등록중 오류 발생 ${error.message}`);
    },
  });

  const onSubmit: SubmitHandler<ItemFormOutput> = (data) => {
    updateMutation.mutate(data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className="w-full px-6"
      >
        <div className="mb-9 flex w-full justify-between">
          <h2 className="font-pretendard text-2xl leading-9 font-bold">
            상품 수정하기
          </h2>
          <Button type="submit" disabled={!isValid || updateMutation.isPending}>
            {updateMutation.isPending ? '수정 중...' : '수정'}
          </Button>
        </div>
        <div className="mb-8 flex w-full flex-col gap-4">
          <label
            className="font-pretendard text-lg leading-6.5 font-bold text-gray-800"
            htmlFor="item_name"
          >
            상품명
          </label>
          <input
            id="item_name"
            placeholder="상품명을 입력해주세요"
            aria-label="상품명을 입력해주세요"
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-error-red">{errors.name.message}</span>
          )}
        </div>

        <div className="mb-8 flex w-full flex-col gap-4">
          <label
            className="font-pretendard text-lg leading-6.5 font-bold text-gray-800"
            htmlFor="item_describe"
          >
            내용
          </label>
          <textarea
            id="item_describe"
            placeholder="내용을 입력해주세요"
            aria-label="내용을 입력해주세요"
            className="h-70.5 w-full max-w-full resize-none rounded-xl border-0 bg-gray-100 px-6 py-4"
            {...register('description')}
          />
          {errors.description && (
            <span className="text-error-red">{errors.description.message}</span>
          )}
        </div>
        <div className="mb-8 flex w-full flex-col gap-4">
          <label
            className="font-pretendard text-lg leading-6.5 font-bold text-gray-800"
            htmlFor="item_price"
          >
            가격
          </label>
          <input
            id="item_price"
            placeholder="가격 입력해주세요"
            aria-label="가격 입력해주세요"
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            {...register('price')}
          />
          {errors.price && (
            <span className="text-error-red">{errors.price.message}</span>
          )}
        </div>
        <div className="mb-8 flex w-full flex-col gap-4">
          <label
            className="font-pretendard text-lg leading-6.5 font-bold text-gray-800"
            htmlFor="item_tags"
          >
            태그
          </label>
          <input
            id="item_tags"
            placeholder="테스트 태그 예시: #아이패드미니, #애플, #가성비"
            aria-label="태그를 입력해주세요 (쉼표 구분)"
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            {...register('tags')}
          />
          {errors.tags && (
            <span className="text-error-red">{errors.tags.message}</span>
          )}
        </div>
      </form>
    </>
  );
}
