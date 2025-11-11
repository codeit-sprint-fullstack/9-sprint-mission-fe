import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import React from "react";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="">{children}</div>
      </main>
      <Footer />
    </>
  );
}
