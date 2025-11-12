import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111827] px-20 py-20">
      <div className="flex justify-between">
        <div className="text-[#9CA3AF] flex px-4">@codeit-2024</div>
        <ul className="text-white flex flex-row gap-6 items-center justify-center">
          <li>Privacy Policy</li>
          <li>FAQ</li>
        </ul>
        <div className="text-white flex px-4 items-center gap-2">
          <Image src="/ic_facebook.png" alt="facebook" width={20} height={20} />
          <Image src="/ic_twitter.png" alt="twitter" width={20} height={20} />
          <Image src="/ic_youtube.png" alt="youtube" width={20} height={20} />
          <Image
            src="/ic_instagram.png"
            alt="instagram"
            width={20}
            height={20}
          />
        </div>
      </div>
    </footer>
  );
}
