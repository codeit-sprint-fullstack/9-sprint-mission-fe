"use client";

import InputSection from "../_components/InputSection.jsx";
import SubmitBtn from "../_components/SubmitBtn.jsx";
import { useForm } from "react-hook-form";
import { useAuth } from "@/providers/AuthProvider.jsx";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, values },
  } = useForm({ mode: "onChange" });

  const { signup } = useAuth();

  const onSubmit = async (data) => {
    await signup(
      data.email,
      data.nickname,
      data.password,
      data.passwordConfirmation
    );
  };

  const emailRegEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return (
    <form id="login" className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <InputSection
        valueType={"email"}
        labelTitle={"이메일"}
        err={errors.email}
        placeholder={"이메일을 입력하세요."}
        register={register}
        validation={{
          required: "이메일을 입력하세요.",
          pattern: { value: emailRegEx, message: "잘못된 이메일입니다." },
        }}
      />
      <InputSection
        valueType={"text"}
        valueName={"nickname"}
        labelTitle={"닉네임"}
        err={errors.nickname}
        placeholder={"닉네임을 입력하세요."}
        register={register}
        validation={{
          required: "닉네임을 입력하세요.",
        }}
      />
      <InputSection
        valueType={"password"}
        labelTitle={"비밀번호"}
        err={errors.password}
        placeholder={"비밀번호를 입력하세요."}
        register={register}
        validation={{
          required: "비밀번호를 입력하세요.",
          minLength: {
            value: 8,
            message: "비밀번호를 8자 이상 입력해주세요.",
          },
        }}
      />
      <InputSection
        valueType={"password"}
        valueName={"passwordConfirmation"}
        labelTitle={"비밀번호 확인"}
        err={errors.passwordConfirmation}
        placeholder={"비밀번호를 한 번 더 입력하세요."}
        register={register}
        validation={{
          required: "비밀번호를 입력하세요.",
          minLength: {
            value: 8,
            message: "비밀번호를 8자 이상 입력해주세요.",
          },
          validate: (value) =>
            value === values["password"] || "비밀번호가 일치하지 않습니다",
        }}
      />
      <SubmitBtn valueTitle={"회원가입"} formValid={isValid} />
    </form>
  );
}
