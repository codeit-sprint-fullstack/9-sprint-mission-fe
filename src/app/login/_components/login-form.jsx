"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from 'next/navigation'
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import VisibilityOff from '@/assets/icons/ic_visibility_off.svg'
import VisibilityOn from '@/assets/icons/ic_visibility_on.svg'
import { Modal } from "@/components/ui/modal";

const loginFormSchema = z.object({
  email: z.email(),
  password: z
    .string()
    .min(10, '내용은 10자 이상 입력해주세요.')
    .max(100, '내용은 100자 이내로 입력해주세요.'),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    mode: 'onChange'
  })

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();

  const handlePasswordVisible = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onSubmit = (e) => {

    const user = USER_DATA.find(
      (u) => u.email === email && u.password === password);

    if (!user) {
      setShowModal(true);
    } else {
      router.replace('/products');
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form
        method="POST"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <label htmlFor="email">이메일</label>
        <input
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          aria-label="이메일을 입력해주세요"
          required
          {...register("email")}
        />
        {errors.email &&
          <span className="error">{errors.email.message}</span>
        }

        <label htmlFor="password">비밀번호</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={passwordVisible ? "text" : "password"}
            alt={passwordVisible ? "텍스트가 보입니다." : "텍스트가 보이지않습니다."}
            placeholder="비밀번호를 입력해주세요"
            aria-label="비밀번호를 입력해주세요"
            {...register("password")}
          />
          <Image
            className="btn_visibility_icon"
            src={passwordVisible ? VisibilityOn : VisibilityOff}
            alt={passwordVisible ? "비밀번호 표시 아이콘" : "비밀번호 감춰진 표시 아이콘"}
            onClick={handlePasswordVisible}
          />

          {errors.password &&
            <span className="error">{errors.password.message}</span>
          }
        </div>

        <button
          type="submit"
          disabled={!isValid}
        >
          로그인
        </button>
      </form>

      {showModal &&
        <Modal
          close={handleCloseModal}
          msg={"비밀번호가 일치하지 않습니다."}
        />
      }
    </>
  )
}
