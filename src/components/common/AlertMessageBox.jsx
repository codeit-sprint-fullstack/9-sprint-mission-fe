"use client";

export default function AlertMessageBox({ onClose, message }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/70">
      <div className="flex flex-col gap-10 w-135 h-62.5 p-10 bg-white rounded-lg">
        <p className="text-secondary-800 text-center font-medium mt-10 items-center justify-center">
          {message}
        </p>
        <div className="w-full flex justify-center">
          <button id="popup-btn" className="btns w-40" onClick={onClose}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
