import Image from 'next/image'
import Link from 'next/link'

import FacebookIcon from '@/assets/icons/ic_facebook.svg'
import InstagramIcon from '@/assets/icons/ic_instagram.svg'
import TwitterIcon from '@/assets/icons/ic_twitter.svg'
import YoutubeIcon from '@/assets/icons/ic_youtube.svg'

export function Footer() {
  return (
    <section className="flex flex-row items-center gap-4 shrink-0 justify-between bg-gray-900 py-8 px-50">
      <div className="flex flex-row items-center justify-around w-full">
        <p className="text-gray-400 text-center font-pretendard font-normal">@codeit - 2024</p>
        <div className="flex gap-16 text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]">
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="./privacy">Privacy Policy</Link>
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="./faq">FAQ</Link>
        </div>
        <div className="flex gap-7.5 items-center">
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="https://www.youtube.com/results?search_query=코드잇_판다마켓" target="_blank"><Image src={YoutubeIcon} width={20} height={20} alt="youtube" /></Link>
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="https://www.facebook.com/" target="_blank"><Image src={FacebookIcon} width={20} height={20} alt="facebook" /></Link>
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="https://www.instagram.com/" target="_blank"><Image src={InstagramIcon} width={20} height={20} alt="instagram" /></Link>
          <Link className="text-base font-normal font-pretendard text-center no-underline text-[#E5E7EB]" href="https://www.twitter.com/" target="_blank"><Image src={TwitterIcon} width={20} height={20} alt="twitter" /></Link>
        </div>
      </div >
    </section >
  );
}