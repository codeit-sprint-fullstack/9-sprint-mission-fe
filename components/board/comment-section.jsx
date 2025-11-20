"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";

export function CommentSection({ postId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState("");


  const timeAgo = (dateString) => {
    if (!dateString) return "";
    const now = new Date();
    const commentDate = new Date(dateString);
    const diff = Math.floor((now - commentDate) / 1000);

    if (diff < 60) return `${diff}초 전`;
    if (diff < 3600) return `${Math.floor(diff / 60)}분 전`;
    if (diff < 86400) return `${Math.floor(diff / 3600)}시간 전`;
    return `${Math.floor(diff / 86400)}일 전`;
  };

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments?articleId=${postId}`);
        if (!res.ok) throw new Error("댓글을 불러올 수 없습니다");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchComments();
  }, [postId]);

  const handleAddComment = async () => {
    if (!newComment.trim()) return;

    const payload = {
      content: newComment,
      articleId: postId,
      author: "익명",
    };

    try {
      const res = await fetch("${process.env.NEXT_PUBLIC_API_URL}/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("댓글 등록 실패");

      const savedComment = await res.json();
      setComments([...comments, savedComment]);
      setNewComment("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleEditComment = (comment) => {
    setEditingId(comment.id);
    setEditContent(comment.content);
  };

  const handleSaveEdit = async (id) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editContent }),
      });
      if (!res.ok) throw new Error("댓글 수정 실패");
      const updatedComment = await res.json();
      setComments(comments.map((c) => (c.id === id ? updatedComment : c)));
      setEditingId(null);
      setEditContent("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteComment = async (id) => {
    if (!confirm("댓글을 삭제하시겠습니까?")) return;
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("댓글 삭제 실패");
      setComments(comments.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="space-y-6">
 
      <div className="w-full flex flex-col items-end">
        <textarea
          placeholder="댓글을 입력해주세요"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full rounded-[12px] bg-[#F3F4F6] p-4 text-sm resize-none focus:outline-none"
          rows={4}
        />
        <Button
          onClick={handleAddComment}
          className="mt-2 rounded-xl bg-[#9CA3AF] px-5 py-2 text-white text-sm font-medium hover:bg-[#6B7280] transition-colors"
          style={{ fontFamily: "Pretendard" }}
        >
          등록
        </Button>
      </div>

     
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="px-3 py-2 bg-[#FCFCFC] border-b border-[#E5E7EB] flex justify-between items-center gap-4"
          >
         
            <Avatar className="h-10 w-10">
              <div className="flex h-full w-full items-center justify-center bg-muted">
                {comment.author?.[0] || "?"}
              </div>
            </Avatar>

            <div className="flex flex-col flex-1">
              {editingId === comment.id ? (
                <div className="flex flex-col">
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    className="w-full rounded-[12px] bg-[#F3F4F6] p-2 text-sm resize-none focus:outline-none"
                    rows={3}
                  />
                  <div className="flex gap-2 mt-1">
                    <Button size="sm" onClick={() => handleSaveEdit(comment.id)}>
                      저장
                    </Button>
                    <Button size="sm" variant="ghost" onClick={() => setEditingId(null)}>
                      취소
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="text-[#111827] mt-2">{comment.content}</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-[#4B5563]">{comment.author || "익명"}</span>
                    <span className="text-[#9CA3AF] text-sm">{timeAgo(comment.createdAt)}</span>
                  </div>
                </>
              )}
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="flex w-[139px] flex-col items-start">
                <DropdownMenuItem
                  onClick={() => handleEditComment(comment)}
                  className="text-[#6B7280] text-[16px] font-normal leading-[26px]"
                  style={{ fontFamily: "Pretendard", textAlign: "center" }}
                >
                  수정하기
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => handleDeleteComment(comment.id)}
                  className="text-[#6B7280] text-[16px] font-normal leading-[26px]"
                  style={{ fontFamily: "Pretendard", textAlign: "center" }}
                >
                  삭제하기
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        ))}
      </div>
    </div>
  );
}
