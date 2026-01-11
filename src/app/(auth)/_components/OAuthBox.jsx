import Image from "next/image";
import googleIcon from "@/assets/img/oauth_google.png";
import kakaoIcon from "@/assets/img/oauth_kakao.png";

export default function OAuthBox() {
  return (
    <div
      id="oauth-box"
      className="flex w-full h-18 mb-6 p-4 py-4 justify-between items-center rounded-lg bg-[#E6F2FF]"
    >
      <span>간편 로그인하기</span>
      <div id="oauth-btn-grup" className="flex gap-4">
        <a className="oauth-btn" href="https://google.com">
          <Image
            src={googleIcon}
            alt="구글 계정으로 로그인"
            className="w-10.5"
          />
        </a>
        <a className="oauth-btn" href="https://www.kakaocorp.com/page/">
          <Image
            src={kakaoIcon}
            alt="카카오 계정으로 로그인"
            className="w-10.5"
          />
        </a>
      </div>
    </div>
  );
}
