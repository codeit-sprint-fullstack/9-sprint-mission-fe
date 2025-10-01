// src/hooks/useValidation.js
import { useState } from "react";

export default function useValidation(form) {
  const [errors, setErrors] = useState({});

  const validators = {
    name: (val) => {
      if (!val) return "상품명을 입력해주세요.";
      if (val.length > 10) return "10자 이내로 입력해주세요.";
      return "";
    },
    description: (val) => {
      if (!val) return "상품 소개를 입력해주세요.";
      if (val.length < 10 || val.length > 100)
        return "100자 이상 입력해주세요.";
      return "";
    },
    price: (val) => {
      if (!val) return "가격을 입력해주세요.";
      if (!/^\d+$/.test(val)) return "숫자로 입력해주세요.";
      return "";
    },
    tagInput: (val) => {
    if (!val) return ""; 
    if (val.length > 5) return "5글자 이하로 입력해주세요.";
    return "";
    }
  };

  const validateField = (name, value) => {
    if (!validators[name]) return;
    const error = validators[name](value);
    setErrors((prev) => ({ ...prev, [name]: error }));
    return !error;
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(validators).forEach((key) => {
      const error = validators[key](form[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid = () => {
     const hasErrors = Object.keys(validators).some(key => validators[key](form[key]) !== "");
  
      return (
        form.name &&
        form.description &&
        form.price &&
        form.tags.length > 0 &&
        !hasErrors
      );
    };

  return { errors, validateField, validateAll, isFormValid };
}
