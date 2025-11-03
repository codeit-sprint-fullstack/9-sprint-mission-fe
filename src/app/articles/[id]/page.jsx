import Image from "next/image";
import Link from "next/link";

import CommentEmptyImg from '@/assets/article/Img_reply_empty.svg'
import EllipsisVertical from '@/assets/icons/ic_ellipsis_vertical.svg'
import HeartIcon from '@/assets/icons/ic_heart.svg'
import Undo from '@/assets/icons/ic_undo.svg'
import DefaultImg from '@/assets/logo.svg'
import { formatDate } from "@/utils/format";
import { paths } from "#/config/paths";

async function getArticlesById(id) {
  const res = await fetch(`http://localhost:3000/api/articles/${id}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new error('베스트 게시글 데이터를 가져오는 데 실패했습니다.');
  }

  const result = await res.json();
  return result.data; // 최대 3개의 게시글 배열
}

export default async function ArticleDetailPage({ params }) {
  const { id } = await params;
  const articles = await getArticlesById(id)

  return (
    <main className="flex flex-col max-w-7xl my-8 mx-auto p-6">
      {/* 게시글 제목 + 좋아요 */}
      <section className="w-full items-center border-b border-solid border-gray-200 pb-4 mb-6">
        <h2 className="font-pretendard text-xl font-bold leading-8 text-gray-900 mb-4">{articles.title}</h2>
        <div className="flex">
          <div className="flex content-baseline flex-wrap">
            <Image
              src={articles.author?.userProfile?.photoUrl}
              alt="authorAvatar"
              className="rounded-[50%]"
              width={40}
              height={40}
            />
            <p className="content-center font-pretendard text-sm font-medium leading-6 ml-4">{articles.author?.name}</p>
            <span className="content-center font-pretendard text-sm leading-6 ml-2">{articles.author?.updatedAt}</span>
          </div>
          <div className="h-8.5 border border-dotted border-gray-200 mx-8"></div>
          <button className="flex items-center gap-1 border border-solid border-gray-200 rounded-4xl bg-white cursor-pointer text-base px-3 py-1">
            <Image
              width={32}
              height={32}
              src={HeartIcon}
              alt="heart-icon"
            />
            <span className="font-pretendard font-medium leading-6.5 text-gray-500">
              123
            </span>
          </button>
        </div>
      </section>

      {/* 본문 */}
      <section className="font-pretendard text-lg text-gray-800 mb-8 leading-6.5 ">
        {articles.content}
      </section>

      {/* 댓글 입력 */}
      <section className="w-full mb-8">
        <h3 className="font-pretendard font-semibold mb-2 leading-6.5">
          댓글달기
        </h3>
        <form>
          <textarea
            className="min-h-20 w-300 p-2.5 border-0 rounded-md resize-none mb-2 bg-gray-100"
            // onChange={handleOnChange}
            placeholder="댓글을 입력해주세요..."
          />
          <div className="flex justify-end">
            <button className="flex justify-center items-center py-3 px-5.75 grow-0 bg-gray-400 border-none rounded-md text-white whitespace-nowrap cursor-pointer hover:bg-primary-100">
              등록
            </button>
          </div>
        </form>
      </section>

      {/* 댓글 리스트 */}
      <section className="flex flex-col gap-6 no-underline list-none">
        {articles.Comment && articles.Comment.length > 0 ? (
          articles.Comment.map((comment) => (
            <li key={comment.id} className="flex flex-col border-b-2.5 border-solid border-[#e5e7eb] py-3 px-0 gap-6">
              <div className="flex justify-between">
                <p className="font-pretendard text-sm bg-gray-900 leading-6">{comment.context}</p>
                <Image
                  className="shrink-0 cursor-pointer bg-gray-400 pt-1.25 pr-0 pb-1.5 pl-0"
                  src={EllipsisVertical}
                  alt="vertical-dropdown-button"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex gap-2 mb-1.5">
                <Image
                  src={
                    comment.author?.userProfile?.photoUrl || { DefaultImg }
                  }
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <div>
                  <span className="font-pretendard text-xs leading-4.5 text-gray-600">
                    {comment.author?.name}
                  </span>
                  <p className="text-gray-400 text-xs leading-4.5">
                    {formatDate(comment.createdAt)}
                  </p>
                </div>
              </div>
            </li>
          ))
        ) : (
          <>
            <Image
              className="self-center mb-4"
              width={140}
              height={140}
              src={CommentEmptyImg}
              alt="comment-empty-img"
            />
            <p className="text-gray-400 text-center font-pretendard leading-6.5">
              아직 댓글이 없어요,
              <br />
              지금 댓글을 달아보세요!
            </p>
          </>
        )}
      </section>

      <Link className="flex self-center items-center justify-center w-62 h-12 py-3 px-16 mt-16 mb-48.5 rounded-[2.5rem] bg-primary-100 gap-2 no-underline active:bg-primary-100" href={paths.app.articles.getHref()}>
        <p className="font-pretendard text-base font-semibold leading-6.5 text-white text-nowrap">
          목록으로 돌아가기
        </p>
        <Image src={Undo} alt="undo-img" width={24} height={24} />
      </Link>
    </main >
  );
}