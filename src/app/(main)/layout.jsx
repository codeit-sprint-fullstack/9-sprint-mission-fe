"use client";

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import AuthProvider from "@/providers/AuthProvider";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <AuthProvider>
        <Header />
        <main className="flex-1">
          <div className="">{children}</div>
        </main>
        <Footer />
      </AuthProvider>
    </>
  );
}
