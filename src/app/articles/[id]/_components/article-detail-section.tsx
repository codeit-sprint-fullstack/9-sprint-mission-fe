import Image from 'next/image';

import HeartIcon from '@/assets/icons/ic_heart.svg';
import DefaultImg from '@/assets/logo.svg';
import { truncateDate } from '@/libs/utils/format';
import type { Article } from '@/types/article';

import { ArticleTitleSection } from './article-title-section';

interface ArticleDetailSectionProps {
  article: Article;
}
export function ArticleDetailSection({ article }: ArticleDetailSectionProps) {
  return (
    <section className="mb-6 w-full items-center border-b border-solid border-gray-200 pb-4">
      <ArticleTitleSection article={article} />
      <div className="flex items-center">
        <div className="flex flex-wrap content-baseline">
          <Image
            src={article.author?.userProfile?.photoUrl || DefaultImg}
            alt="authorAvatar"
            className="rounded-[50%]"
            width={40}
            height={40}
          />
          <p className="font-pretendard ml-4 content-center text-sm leading-6 font-medium">
            {article.author?.nickname}
          </p>
          <span className="font-pretendard ml-2 content-center text-sm leading-6">
            {truncateDate(article.author?.updatedAt, 10)}
          </span>
        </div>
        <div className="mx-4 flex h-6 border border-dotted border-gray-200 md:mx-8"></div>
        <button className="relative flex max-h-7 cursor-pointer items-center gap-1 rounded-4xl border border-solid border-gray-200 bg-white px-3 py-1 md:max-h-10">
          <div className="relative h-6 w-6 shrink-0 text-base md:h-8 md:w-8">
            <Image
              className="object-cover"
              fill
              src={HeartIcon}
              alt="heart-icon"
            />
          </div>
          <span className="font-pretendard leading-6.5 font-medium text-gray-500">
            123
          </span>
        </button>
      </div>
    </section>
  );
}
