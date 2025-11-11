"use client";

import clsx from "clsx";

export default function SubmitBtn({ valueTitle, formValid = true }) {
  return (
    <div className="submit-section mb-6">
      <input
        className={clsx(
          "w-full h-14 border-0 rounded-full text-center text-(--secondary-100) text-xl font-semibold leading-14 cursor-pointer",
          { "bg-(--primary-100)": formValid },
          { "bg-(--secondary-400)": !formValid }
        )}
        id="submit"
        type="submit"
        value={valueTitle}
        disabled={!formValid}
      />
    </div>
  );
}
