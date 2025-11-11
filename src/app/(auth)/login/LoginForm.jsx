"use client";

import InputSection from "../_components/InputSection.jsx";
import SubmitBtn from "../_components/SubmitBtn.jsx";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => console.log(data);

  const emailRegEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
      <SubmitBtn valueTitle={"로그인"} formValid={isValid} />
    </form>
  );
}
