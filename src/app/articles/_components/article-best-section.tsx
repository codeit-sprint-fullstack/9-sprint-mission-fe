import Image from 'next/image';
import Link from 'next/link';

import Badge from '@/assets/icons/ic_medal.svg';
import DefaultImg from '@/assets/logo.svg';
import { cn } from '@/libs/cn';
import { formatDate, truncateText } from '@/libs/utils/format';
import type { Article } from '@/types/article';
import { paths } from '#/config/paths';

interface ArticleBestSectionProps {
  articles: Article[];
}

export function ArticleBestSection({ articles }: ArticleBestSectionProps) {
  return (
    <section className="mb-12">
      <h2 className="font-pretendard mb-6 text-xl font-bold text-gray-900">
        베스트 게시글
      </h2>
      <div className="mx-auto my-0 flex max-w-full gap-6">
        {articles.map((article, index) => {
          const imageSource = article.images?.[0] || DefaultImg;
          return (
            <Link
              href={paths.app.articleDetail.getHref(article.id)}
              key={article.id}
              // 1개 일때 모두숨기고 하나씩 보여주기
              className={cn(
                'hover: relative flex h-48.5 w-96 flex-1 translate-y-[-4px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-lg bg-gray-50 px-6 py-0 text-gray-900 no-underline duration-200',
                index >= 1 && 'hidden',
                index === 1 && 'md:flex',
                index === 2 && 'xl:flex',
              )}
            >
              <div className="bg-primary-100 absolute top-0 left-[6%] flex w-25.5 items-center justify-center gap-1 rounded-l-2xl rounded-tl-none rounded-tr-none rounded-b-2xl px-6 py-0.5">
                <Image src={Badge} alt="Best-Badge" width={16} height={16} />
                <p className="font-pretendard leading-6.5 font-semibold text-white">
                  Best
                </p>
              </div>
              <div className="mt-4 flex w-full flex-row-reverse justify-between gap-2">
                <div className="flex h-18 w-18 border border-solid border-gray-200 bg-white px-3.5 py-3">
                  <Image
                    src={imageSource}
                    alt="썸네일"
                    width={48}
                    height={44.571}
                  />
                </div>
                <p className="font-pretendard mb-1.5 text-xl font-semibold text-gray-800">
                  {truncateText(article.title, 50)}
                </p>
              </div>
              <div className="flex w-full items-center justify-between p-2.5">
                <div className="flex text-xs text-gray-500">
                  {truncateText(article.author.nickname, 10)} · 조회수{' '}
                  {article.view}
                </div>
                <div className="font-pretendard text-sm leading-6 font-normal text-gray-400">
                  {formatDate(article.createdAt)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
