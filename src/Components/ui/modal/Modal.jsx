"use client";
import React from "react";

export default function Modal({ isOpen, message, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl w-[350px] p-6 shadow-lg">
        <p className="text-center text-[16px] text-gray-700 mb-6">{message}</p>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 text-white py-2 rounded-lg text-[16px] hover:bg-blue-600"
        >
          확인
        </button>
      </div>
    </div>
  );
}
