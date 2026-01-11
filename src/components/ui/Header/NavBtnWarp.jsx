"use client";
import { useAuth } from "@/providers/AuthProvider";
import Image from "next/image";
import profileImg from "@/assets/img/ic_profile.svg";
import Link from "next/link";

export default function NavBtnWarp() {
  const { user } = useAuth();
  return (
    <div id="nav-right">
      {user ? (
        <div className="flex justify-between items-center gap-1.5">
          <figure className="relative w-10 h-10">
            <Image src={profileImg} alt="프로필 이미지" fill sizes="100vw" />
          </figure>
          <p>{user.nickname}</p>
        </div>
      ) : (
        <Link id="btn-login" className="btns" href="/login">
          로그인
        </Link>
      )}
    </div>
  );
}
