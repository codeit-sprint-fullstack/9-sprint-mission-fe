"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import VisibilityOff from '@/assets/icons/ic_visibility_off.svg'
import VisibilityOn from '@/assets/icons/ic_visibility_on.svg'
import { Modal } from '@/components/ui/modal';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver,
    mode: "onChange"
  })
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordCheckerVisible, setPasswordCheckerVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handlePasswordCheckerVisible = () => {
    setPasswordCheckerVisible(!passwordCheckerVisible);
  };

  const handleFormEvent = (e) => {
    if (emailError || nicknameError || passwordError || passwordCheckerError) {
      alert("입력값을 확인해주세요.");
      return;
    }

    const user = USER_DATA.find((u) => u.email === email);

    if (user) {
      setShowModal(true);
    } else {
      router.replace("/login");
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          aria-label="이메일을 입력해주세요"
          {...register("email")}
        />
        {errors &&
          <span className="error">{errors.email.message}</span>
        }
        <label htmlFor="nickname">닉네임</label>
        <input
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          aria-label="닉네임을 입력해주세요"
          {...register("nickname")}
        />
        {errors &&
          <span className="error">{errors.nickname.message}</span>
        }

        <label htmlFor="password">비밀번호</label>
        <div className="password-wrapper">
          <input
            id="password"
            className="password"
            type={passwordVisible ? "text" : "password"}
            alt={passwordVisible ? "텍스트가 보입니다." : "텍스트가 보이지않습니다."}
            placeholder="비밀번호를 입력해주세요"
            aria-label="비밀번호를 입력해주세요"
            {...register("password")}
          />
          <Image className="btn_visibility_icon"
            src={passwordVisible ? VisibilityOn : VisibilityOff}
            alt={passwordVisible ? "비밀번호 표시 아이콘" : "비밀번호 감춰진 표시 아이콘"}
            onClick={handlePasswordVisible}
          />
          {errors &&
            <span className="error">{errors.password.message}</span>
          }
        </div>

        <label htmlFor="pw-check">비밀번호 확인</label>
        <div className="password-wrapper">
          <input
            id="checker"
            className="password"
            type={passwordCheckerVisible ? "text" : "password"}
            alt={passwordVisible ? "텍스트가 보입니다." : "텍스트가 보이지않습니다."}
            placeholder="비밀번호를 입력해주세요"
            aria-label="비밀번호를 입력해주세요"
            {...register("checker")}
          />
          <Image
            className="btn_visibility_icon"
            src={passwordCheckerVisible ? VisibilityOn : VisibilityOff}
            alt={passwordVisible ? "비밀번호 표시 아이콘" : "비밀번호 감춰진 표시 아이콘"}
            onClick={handlePasswordCheckerVisible}
          />
          {errors &&
            <span className="error">{errors.checker.message}</span>
          }
        </div>

        {/* <!--조건에 맞지 않으면 비활성화--> */}
        <button
          type="submit"
          disabled={!isValid}
        >로그인</button>
      </form>
      {showModal &&
        <Modal close={handleCloseModal} msg={"사용 중인 이메일입니다."} />
      }
    </>
  )
}