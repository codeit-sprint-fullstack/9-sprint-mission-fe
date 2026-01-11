'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import {
  type ItemFormInput,
  type ItemFormOutput,
  itemFormSchema,
} from '@/libs/schemas/item.schema';
import { useDialog } from '@/providers/modal-context';
import { itemService } from '@/services/item-service';
import type { Item } from '@/types/item';

export default function ItemRegistration() {
  const { openDialog } = useDialog();
  const router = useRouter();
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setImageFiles((prev) => [...prev, ...files]);

      const newPreviews = files.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...newPreviews]);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ItemFormInput, any, ItemFormOutput>({
    resolver: zodResolver(itemFormSchema),
    mode: 'onChange', // 실시간 유효성 검사
    defaultValues: {
      name: '',
      description: '',
      price: '',
      tags: '',
    },
  });

  const createMutation = useMutation<Item, Error, FormData>({
    mutationFn: async (formData: FormData) => {
      const response = await itemService.createItem(formData);
      const { ok, status, ...itemData } = response as any;
      return itemData as Item;
    },
    onSuccess: () => {
      openDialog('상품 등록에 성공했습니다.');
      router.push('/items');
      router.refresh();
    },
    onError: (error) => {
      console.error(error);
      openDialog(`등록중 오류 발생 ${error.message}`);
    },
  });

  const onSubmit = (data: ItemFormOutput) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', data.price);
    // 태그 배열 처리
    data.tags.forEach((tag) => formData.append('tags', tag));

    // backend와 일치
    imageFiles.forEach((file) => {
      formData.append('images', file);
    });

    createMutation.mutate(formData);
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
            상품 등록
          </h2>
          <Button type="submit" disabled={!isValid || createMutation.isPending}>
            {createMutation.isPending ? '등록 중...' : '등록'}
          </Button>
        </div>
        <div className="mb-8 flex w-full flex-col gap-4">
          <label
            className="font-pretendard text-lg leading-6.5 font-bold text-gray-800"
            htmlFor="item_name"
          >
            제목
          </label>
          <input
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            type="text"
            id="item_name"
            placeholder="제목을 입력해주세요"
            aria-label="제목을 입력해주세요"
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
            className="h-70.5 w-full max-w-full resize-none rounded-xl border-0 bg-gray-100 px-6 py-4"
            id="item_describe"
            placeholder="내용을 입력해주세요"
            aria-label="내용을 입력해주세요"
            {...register('description')}
          ></textarea>
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
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            type="text"
            id="item_price"
            placeholder="제목을 입력해주세요"
            aria-label="제목을 입력해주세요"
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
            className="h-14 w-full rounded-xl bg-gray-100 px-6 py-4"
            type="text"
            id="item_tags"
            placeholder="테스트 태그 예시: #아이패드미니, #애플, #가성비"
            aria-label="태그를 입력해주세요 (쉼표 구분)"
            {...register('tags')}
          />
          {errors.tags && (
            <span className="text-error-red">{errors.tags.message}</span>
          )}
        </div>
        <div className="mb-8 flex w-full flex-col gap-4">
          <label className="text-lg font-bold text-gray-800">상품 이미지</label>
          <div className="flex flex-wrap gap-4">
            <label className="flex h-24 w-24 cursor-pointer items-center justify-center rounded-xl border-2 border-dashed hover:bg-gray-50">
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              <span className="text-2xl text-gray-400">+</span>
            </label>

            {/* 이미지 미리보기 */}
            {previews.map((src, idx) => (
              <div key={idx} className="relative h-24 w-24">
                <Image
                  src={src}
                  width={100}
                  height={100}
                  className="h-full w-full rounded-xl object-cover"
                  alt="preview"
                />
              </div>
            ))}
          </div>
        </div>
      </form>
    </>
  );
}
