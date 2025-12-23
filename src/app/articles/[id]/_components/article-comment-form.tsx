"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { articleCommentSchema, type ArticleCommentValues } from "@/libs/schemas/article.schema";
import { useDialog } from "@/providers/modal-context";
import { commentService } from "@/services/comment-service";

interface ArticleCommentFormProps {
  articleId: number | string
}

export function ArticleCommentForm({ articleId }: ArticleCommentFormProps) {
  const { openDialog } = useDialog()
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ArticleCommentValues>({
    resolver: zodResolver(articleCommentSchema),
    defaultValues: {
      context: ""
    }
  })

  const onSubmit = async (data: ArticleCommentValues) => {
    try {
      await commentService.createComments(articleId, {
        context: data.context
      });
      openDialog("댓글이 등록되었습니다.")
      reset();
      router.refresh()
    } catch (error) {
      const message = error instanceof Error ? error.message : "댓글 등록에 실패했습니다.";
      openDialog(message);
    }
  }

  return (
    <section className="w-full mb-8">
      <h3 className="font-pretendard font-semibold mb-2 leading-6.5">
        댓글달기
      </h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col" >
        {/* <input type="hidden" name="authorId" value={tempAuthorId} /> */}
        {/* <input type="hidden" name="articleId" value={articleId} /> */}
        <textarea
          className="min-h-20 w-full p-2.5 border-0 rounded-md resize-none mb-2 bg-gray-100"
          placeholder="댓글을 입력해주세요..."
          {...register("context")}
        />
        {errors.context && (
          <span className="text-error-red text-sm mt-1 ml-2">
            {errors.context.message}
          </span>
        )}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="flex justify-center items-center py-3 px-5.75 grow-0 bg-gray-400 border-none rounded-md text-white whitespace-nowrap cursor-pointer hover:bg-primary-100">
            등록
          </Button>
        </div>
      </form>
    </section>
  )
}
