"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function PostsPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/posts");
  }, [router]);

  return <div className="text-red-500">이동중입니다.</div>;
} 
