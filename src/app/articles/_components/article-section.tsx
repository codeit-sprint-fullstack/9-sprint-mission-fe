import Image from 'next/image';
import Link from 'next/link';

import DefaultImg from '@/assets/logo.svg';
import { formatDate } from '@/libs/utils/format';
import type { Article } from '@/types/article';
import { paths } from '#/config/paths';

interface ArticleSectionProps {
  articles: Article[];
}

export function ArticleSection({ articles }: ArticleSectionProps) {
  return (
    <div className="flex flex-col gap-3">
      {articles.map((article) => {
        const imageSource = article.images?.[0] || DefaultImg;
        return (
          <Link
            href={paths.app.articleDetail.getHref(article.id)}
            key={article.id}
            className="cursor-pointer border border-solid border-[#eee] px-0 py-2.5 text-gray-900 no-underline"
          >
            <div className="flex flex-row-reverse justify-between">
              <Image
                className="my-3.5 mr-5 mb-5 ml-3 flex shrink-0"
                width={48}
                height={44}
                src={imageSource}
                alt="썸네일"
              />
              <p className="font-pretendard mb-1 text-xl leading-8 font-semibold">
                {article.title}
              </p>
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="relative h-6 w-6 rounded-[50%]">
                  <Image
                    className="absolute"
                    fill
                    src={article.author.userProfile?.photoUrl || DefaultImg}
                    alt="author-avatar"
                  />
                </div>
                <p className="font-pretendard text-sm leading-6 text-gray-600">
                  {article.author.nickname}
                </p>
                <p className="font-pretendard text-sm leading-6 text-gray-400">
                  {formatDate(article.createdAt)}
                </p>
              </div>
              <div className="font-pretendard mr-5 text-base leading-6.5 text-gray-500">
                조회수 {article.view}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
