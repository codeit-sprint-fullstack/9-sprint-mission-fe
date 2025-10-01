import React, { useState } from "react";
import "./RegistrationPage.css";
import { useNavigate } from "react-router-dom";
import useValidation from "../hooks/useValidation";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    tags: [],
    tagInput: "",
  });

  const {
    errors,
    validateAll,
    validateField,
    isFormValid
  } = useValidation(form);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
    const newForm = { ...prev, [name]: value };
    validateField(name, value); 
    return newForm;
  });
  };

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && form.tagInput.trim()) {
      e.preventDefault();
      if (form.tagInput.length <= 5) {
        setForm((prev) => ({
          ...prev,
          tags: [...prev.tags, prev.tagInput],
          tagInput: ""
        }));
      }
    }
  };

  const handleRemoveTag = (tag) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag)
    }));
  };

  const handleSubmit = async () => {
    if (!validateAll()) return;

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          description: form.description,
          price: form.price,
          tags: form.tags
        })
      });

      if (res.ok) {
        const result = await res.json();
        navigate(`/product/${result.id}`);
      }
    } catch (error) {
      console.error("등록 실패:", error);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-header">
       <h2 className="label-text">상품 등록하기</h2>
        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          등록
        </button>
      </div>

      <div className="input-group"> 
        <label className="label-text" htmlFor="name">상품명</label>
        <input
          name="name"
          placeholder="상품명을 입력해주세요"
          value={form.name}
          onChange={handleChange}
          className={errors.name ? "error" : ""}
        />
        {errors.name && <p className="error-msg">{errors.name}</p>}
      </div>

      <div className="input-group">
        <label className="label-text" htmlFor="description">상품 소개</label>
        <textarea
          name="description"
          placeholder="상품 소개를 입력해주세요"
          value={form.description}
          onChange={handleChange}
          className={errors.description ? "error" : ""}
        />
        {errors.description && <p className="error-msg">{errors.description}</p>}
      </div>

      <div className="input-group">
        <label className="label-text" htmlFor="price">판매 가격</label>
        <input
          name="price"
          placeholder="판매 가격을 입력해주세요"
          value={form.price}
          onChange={handleChange}
          className={errors.price ? "error" : ""}
        />
        {errors.price && <p className="error-msg">{errors.price}</p>}
      </div>

      <div className="input-group">
        <label className="label-text" htmlFor="tags">태그</label>
        <input
          name="tagInput"
          placeholder="태그를 입력해주세요"
          value={form.tagInput}
          onChange={handleChange}
          onKeyDown={handleTagKeyDown}
          className={errors.tagInput ? "error" : ""}
        />
        {errors.tagInput && <p className="error-msg">{errors.tagInput}</p>}

        <div className="tag-list">
          {form.tags.map((tag, idx) => (
            <span key={idx} className="tag">
              #{tag}
              <button onClick={() => handleRemoveTag(tag)}>×</button>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
