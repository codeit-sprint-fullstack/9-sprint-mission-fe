"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation';
import { use, useEffect, useState } from "react";
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Modal } from "@/components/ui/dialog";
import { articleFormSchema, type ArticleFormValues } from '@/libs/schemas/article.schema';
import { articleService } from '@/services/article-service';

interface ArticleRegistrationProps {
  params: Promise<{ id: string }>
}
export function ArticleRegistration({ params }: ArticleRegistrationProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // const params = useParams<{ id: string }>()
  // const id = params.id;
  // React19 use hook 사용 (Promise -> resolve 까지 대기 후  결과값 반환)
  const { id } = use(params)
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ArticleFormValues>({
    resolver: zodResolver(articleFormSchema),
    mode: 'onChange', // 실시간 유효성 검사
    defaultValues: {
      title: "",
      content: "",
    }
  })

  // 기존 데이터 불러오기 (수정시)
  useEffect(() => {
    if (id) {
      const fetchArticle = async () => {
        try {
          const data = await articleService.getArticlesById(id);
          reset({
            title: data.title,
            content: data.content
          })
        } catch (error) {
          console.error("데이터 로드 실패:", error)
        }
      }
      fetchArticle();
    }
  }, [id, reset])

  const onSubmit = async (data: ArticleFormValues) => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    try {
      await articleService.updateArticle(id, data)

      router.push(`/articles/${id}`)
      router.refresh()
    } catch (error) {
      console.error("등록중 오류 발생:", error);
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
        className='px-6 w-full'
      >
        <div className="flex w-full justify-between mb-9">
          <h2 className='font-pretendard text-2xl font-bold leading-9'>
            게시물 수정하기
          </h2>
          <Button
            type="submit"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? '수정 중...' : '등록'}
          </Button>
        </div>
        <div className="flex flex-col gap-4 w-full mb-8">
          <label
            className='text-gray-800 font-pretendard text-lg font-bold leading-6.5'
            htmlFor="title"
          >
            제목
          </label>
          <input
            id="title"
            type="text"
            className='w-full h-14 py-4 px-6 rounded-xl bg-gray-100'
            placeholder="제목을 입력해주세요"
            aria-label="제목을 입력해주세요"
            {...register('title')}
          />
          {errors.title && (
            <span className='text-error-red'>{errors.title.message}</span>
          )}
        </div>

        <div className="flex flex-col gap-4 w-full mb-8">
          <label
            className='text-gray-800 font-pretendard text-lg font-bold leading-6.5'
            htmlFor="content"
          >
            내용
          </label>
          <textarea
            id="content"
            className='max-w-full w-full h-70.5 py-4 px-6 resize-none border-0 rounded-xl bg-gray-100'
            placeholder="내용을 입력해주세요"
            aria-label="내용을 입력해주세요"
            {...register('content')}
          />
          {errors.content && (
            <span className='text-error-red'>{errors.content.message}</span>
          )}
        </div>
      </form>

      {showModal && (
        <Modal
          close={() => setShowModal(false)}
          msg={
            "등록중 예기치 못한 오류가 발생했습니다.\n 잠시후 다시시도해 주십시오 \n 문의(meta-os@zohomail.com)"
          }
        />
      )}
    </>
  );
}

