"use client"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState } from "react"

import EllipsisVertical from '@/assets/icons/ic_ellipsis_vertical.svg'
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/dialog"
import { useDialog } from "@/providers/modal-context"
import { commentService } from "@/services/comment-service"
import type { ArticleComment } from "@/types/article"

interface DropdownContentProps {
  comment: ArticleComment
  articleId: string;
}

const options = [
  { option: '수정하기', name: 'update' },
  { option: '삭제하기', name: 'delete' }
]

export function DropdownContent({ comment, articleId }: DropdownContentProps) {
  const router = useRouter()
  const { openDialog } = useDialog()

  const [showPanel, setShowPanel] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editContext, setEditContext] = useState<string>(comment.context);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const togglePanel = () => setShowPanel((prev) => !prev)

  const handleMenuClick = (name: string) => {
    setShowPanel(false);
    if (name === 'update') {
      setIsEditing(true);
    }
    if (name === 'delete') {
      setShowDeleteModal(true);
    }
  }

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditContext(comment.context);
  }

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editContext.trim()) return;
    setIsSubmitting(true);
    try {
      await commentService.articleUpdateComments(articleId, comment.id, { context: editContext })
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error(error)
      openDialog("댓글 수정 중 오류가 발생했습니다.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDelete = async () => {
    try {
      await commentService.articleDeleteComments(articleId, comment.id)
      setShowDeleteModal(false);
      router.refresh()
    } catch (error) {
      console.error(error)
      openDialog("삭제 중 오류가 발생")
    }
  }

  return (
    <>
      <div className="font-pretendard text-sm text-gray-900 leading-6 w-full">
        {isEditing ? (
          <form onSubmit={handleUpdate} className="flex flex-col w-full">
            <textarea
              className="w-full bg-transparent  border-0 focus:ring-0 resize-none"
              value={editContext}
              onChange={(e) => setEditContext(e.target.value)}
              rows={3}
            />
            <div className="flex w-full justify-end gap-6">
              <Button
                type="button"
                onClick={handleCancelEdit}
              >
                취소
              </Button>
              <Button
                type="button"
                disabled={isSubmitting || !editContext.trim()}
              >
                {isSubmitting ? '수정 중...' : '수정 완료'}
              </Button>
            </div>
          </form>
        ) : (
          <div className="flex justify-between max-w-7xl">
            <p>{comment.context}</p>
            <button
              className="relative cursor-pointer p-2 hover:bg-gray-200 rounded-full transition-colors"
              onClick={togglePanel}
            >
              <Image
                className="flex shrink-0 pt-1.25 pr-0 pb-1.5 pl-0 mr-3.25 ml-3.25"
                src={EllipsisVertical}
                alt="menu"
                width={3}
                height={13}
                unoptimized
              />
            </button>
            {showPanel && (
              <ul className="absolute z-2 mt-2 shrink-0 rounded-xl border border-solid border-gray-200 bg-white -left-20">
                {options.map((opt) => (
                  <li key={opt.name} className="font-pretendard cursor-point mt-0.5 flex h-10.5 w-31.25 shrink-0 items-center justify-center text-gray-800 text-lg leading-6.5">
                    <button
                      className="border-0 bg-white"
                      onClick={() => handleMenuClick(opt.name)}
                    >
                      {opt.option}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div >

      {showDeleteModal && (
        <Modal
          close={() => setShowDeleteModal(false)}
          msg={'정말로 삭제 하시겠습니까?'}
        >
          정말로 삭제 하시겠습니까?
          <Button className='flex w-full' onClick={handleDelete} >예</Button>
        </Modal>
      )
      }
    </>
  )
}