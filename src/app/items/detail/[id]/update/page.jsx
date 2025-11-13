"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Modal } from "@/components/ui/modal";
import { itemFormSchema } from '@/libs/schemas/item.schema';
import { updateItem } from '@/services/item-service';

export default function ItemRegistration({ params }) {
  const [showModal, setShowModal] = useState(false);

  const { id } = React.use(params)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(itemFormSchema),
    mode: 'onChange', // 실시간 유효성 검사
  })

  const onSubmit = async (data) => {

    try {
      await updateItem(id, data)

      router.push(`/items/detail/${id}`)

    } catch (error) {
      console.error("등록중 오류 발생:", error);
      setShowModal(true);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className='px-6 w-full'
      >
        <div className="flex w-full justify-between mb-9">
          <h2 className='font-pretendard text-2xl font-bold leading-9'>
            상품 수정하기
          </h2>
          <Button
            type="submit"
            disabled={!isValid}
          >
            등록
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-full mb-8">
          <label
            className='text-gray-800 font-pretendard text-lg font-bold leading-6.5'
            htmlFor="item_name"
          >
            상품명
          </label>
          <input
            className='w-full h-14 py-4 px-6 rounded-xl bg-gray-100'
            type="text"
            id="item_name"
            placeholder="상품명을 입력해주세요"
            aria-label="상품명을 입력해주세요"
            {...register('name')}
          />
          {errors.name && (
            <span className='text-error-red'>{errors.name.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full mb-8">
          <label
            className='text-gray-800 font-pretendard text-lg font-bold leading-6.5'
            htmlFor="item_describe"
          >
            내용
          </label>
          <textarea
            className='max-w-full w-full h-70.5 py-4 px-6 resize-none border-0 rounded-xl bg-gray-100'
            id="item_describe"
            placeholder="내용을 입력해주세요"
            aria-label="내용을 입력해주세요"
            {...register('description')}
          ></textarea>
          {errors.description && (
            <span className='text-error-red'>{errors.description.message}</span>
          )}
        </div>
        <div className="flex flex-col gap-4 w-full mb-8">
          <label
            className='text-gray-800 font-pretendard text-lg font-bold leading-6.5'
            htmlFor="item_name"
          >
            가격
          </label>
          <input
            className='w-full h-14 py-4 px-6 rounded-xl bg-gray-100'
            type="text"
            id="item_price"
            placeholder="가격 입력해주세요"
            aria-label="가격 입력해주세요"
            {...register('price')}
          />
          {errors.price && (
            <span className='text-error-red'>{errors.price.message}</span>
          )}
        </div>
      </form>

      {showModal && (
        <Modal
          close={handleCloseModal}
          msg={
            "등록중 예기치 못한 오류가 발생했습니다.\n 잠시후 다시시도해 주십시오 \n 문의(meta-os@zohomail.com)"
          }
        />
      )}
    </>
  );
}


