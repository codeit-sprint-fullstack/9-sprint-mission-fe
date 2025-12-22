"use client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"

import EllipsisVertical from '@/assets/icons/ic_ellipsis_vertical.svg'
import { Button } from "@/components/ui/button"
import { DeleteDialog } from "@/components/ui/dialog/delete-dialog"
import type { ItemCommentValue } from "@/libs/schemas/comment.schema"
import { useDialog } from "@/providers/modal-context"
import { commentService } from "@/services/comment-service"
import { type ItemComment } from "@/types/item"

const contents = [
  { option: '수정하기', name: 'update' as const },
  { option: '삭제하기', name: 'delete' as const }
]

export function DropdownContent({ comment }: { comment: ItemComment }) {
  const params = useParams()
  const queryClient = useQueryClient();
  const itemId = params.id as string
  const { openDialog } = useDialog();

  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const [deleteDialogMessage, setDeleteDialogMessage] = useState<string>('');
  const [context, setContext] = useState<string>(comment.context);

  // 삭제
  const deleteMutation = useMutation<{ status: number, ok: boolean }, Error, void>({
    mutationFn: () => {
      if (!itemId) throw new Error("ID missing")
      return commentService.deleteComments(itemId, comment.id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['item', itemId]
      });
      openDialog('댓글 삭제를 성공 하였습니다.')
      setShowDeleteDialog(false)
    },
    onError: (error) => {
      openDialog("삭제 중 오류가 발생하였습니다.")
      setShowDeleteDialog(false);
    }
  })
  // 수정
  const updateMutation = useMutation<{ status: number, ok: boolean }, Error, ItemCommentValue>({
    mutationFn: (context) => {
      return commentService.updateComments(itemId, comment.id, context)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['item', itemId]
      });
      openDialog("댓글 업데이트를 성공했습니다.")
      setIsUpdating(false)
    },
    onError: (error) => {
      console.error(error);
      openDialog(`업데이트 중 오류가 발생했습니다: ${error.message}`)
    }
  });
  // 버튼 핸들러 & UI
  const handlePanel = () => {
    setShowPanel((prev) => !prev);
  }
  const handleOnChange = (name: 'update' | 'delete') => {
    setShowPanel(false)
    setContext('')

    if (name === 'update') {
      setContext(comment.context)
      setIsUpdating(true)
    }
    if (name === 'delete') {
      setDeleteDialogMessage('정말로 댓글을 삭제하시겠어요?')
      setShowDeleteDialog(true)
    }
  }

  const handleDelete = () => {
    deleteMutation.mutate();
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!context.trim()) {
      openDialog("댓글 내용을 입력해주세요.");
      return;
    }
    updateMutation.mutate({ context })
  }

  const handleCloseUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsUpdating(false);
    setContext(comment.context)
  }

  return (
    <>
      <div className="font-pretendard text-sm text-gray-900 leading-6 w-full">
        {isUpdating ? (
          <form
            className="flex flex-col w-full"
            onSubmit={onSubmit}>
            <input
              name="context"
              className="bg-gray-100 w-full"
              value={context}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setContext(e.target.value)}
            />
            <section className="flex w-full justify-end gap-6">
              <button
                type="button"
                onClick={handleCloseUpdate}>
                취소
              </button>
              <Button type="submit" disabled={updateMutation.isPending}>
                {updateMutation.isPending ? "수정 중..." : "수정 완료"}
              </Button>
            </section>
          </form>
        ) : (
          <div className="flex justify-between max-w-7xl">
            <p>{comment.context}</p>
            <div
              className="relative cursor-pointer"
              onClick={handlePanel}
            >
              <Image
                className="flex shrink-0 pt-1.25 pr-0 pb-1.5 pl-0 mr-3.25 ml-3.25"
                src={EllipsisVertical}
                alt="더보기"
                width={3}
                height={13}
              />
              {showPanel && (
                <ul className="absolute z-2 mt-2 shrink-0 rounded-xl border border-solid border-gray-200 bg-white -left-20">
                  {contents.map((c) => (
                    <li key={c.name} className="font-pretendard cursor-pointer mt-0.5 flex h-10.5 w-31.25 shrink-0 items-center justify-center text-gray-800 text-lg leading-6.5">
                      <button
                        className="border-0 bg-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOnChange(c.name)
                        }}
                      >
                        {c.option}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}
      </div >
      {showDeleteDialog && (
        <DeleteDialog
          close={() => setShowDeleteDialog(false)}
          msg={deleteDialogMessage}
          deleteClick={handleDelete}
        >
        </DeleteDialog>
      )}
    </>
  )
}