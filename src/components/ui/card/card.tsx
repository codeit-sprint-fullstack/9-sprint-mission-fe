import Image from 'next/image';

import Heart from '@/assets/icons/ic_heart.svg';
import DefaultItemImage from '@/assets/items/Img_default_items.svg';

interface CardProps {
  name: string;
  price: string | number;
  images: string[] | string | null;
  type: string;
  likes: number;
}

export function Card({ name, price, images, type, likes }: CardProps) {
  // 호스트 주소 설정
  const baseHost =
    process.env.NEXT_PUBLIC_IMAGE_HOST || 'http://127.0.0.1:3005';

  // 단일 이미지 추출
  const rawImage = Array.isArray(images) ? images[0] : images;

  // 풀 경로 생성 (상대 경로인 경우에만 baseHost 결합)
  const fullImageUrl = rawImage
    ? rawImage.startsWith('http')
      ? rawImage
      : `${baseHost}/${rawImage.startsWith('/') ? rawImage.slice(1) : rawImage}`
    : DefaultItemImage; // 기본 이미지는 폴백

  const formattedPrice =
    typeof price === 'string' ? parseInt(price, 10) : price;

  return (
    <div className="flex cursor-pointer flex-col gap-4 duration-200 ease-in hover:bg-gray-200 hover:transition">
      <Image
        className={
          type === 'favorite'
            ? 'h-[282px] w-[282px] rounded-2xl bg-gray-100'
            : 'h-[221px] w-[221px] rounded-2xl bg-gray-100'
        }
        width={200}
        height={200}
        src={fullImageUrl}
        alt={`${name} 이미지`}
      />
      <div className="flex flex-col gap-1.5">
        <p className="font-pretendard text-base font-medium text-gray-800">
          {name}
        </p>
        <p className="font-pretendard text-lg font-bold text-gray-800">
          {formattedPrice.toLocaleString()}원
        </p>
        <div className="font-pretendardk text-xs font-medium text-gray-600">
          <Image src={Heart} width={16} height={16} alt="좋아요 아이콘" />
          {likes}
        </div>
      </div>
    </div>
  );
}
