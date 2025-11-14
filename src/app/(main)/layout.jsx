"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
// import AuthProvider from "@/providers/AuthProvider";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1 w-full">
        <div className="w-full max-w-[1100px] px-4 mx-auto">{children}</div>
      </main>
      <Footer />
    </>
  );
}
