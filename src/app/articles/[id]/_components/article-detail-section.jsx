import Image from "next/image"

import HeartIcon from '@/assets/icons/ic_heart.svg'

export function ArticleDetailSection({ article }) {
  return (
    <section className="w-full items-center border-b border-solid border-gray-200 pb-4 mb-6">
      <h2 className="font-pretendard text-xl font-bold leading-8 text-gray-900 mb-4">{article.title}</h2>
      <div className="flex">
        <div className="flex content-baseline flex-wrap">
          <Image
            src={article.author?.userProfile?.photoUrl}
            alt="authorAvatar"
            className="rounded-[50%]"
            width={40}
            height={40}
          />
          <p className="content-center font-pretendard text-sm font-medium leading-6 ml-4">{article.author?.name}</p>
          <span className="content-center font-pretendard text-sm leading-6 ml-2">{article.author?.updatedAt}</span>
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
  )
}
