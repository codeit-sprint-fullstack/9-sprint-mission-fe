import { Route, Routes } from "react-router-dom";

import { HomeLayout } from "@/pages/home/HomeLayout";
import { LoginPage } from "@/pages/home/auth/LoginPage";
import { SignUpPage } from "@/pages/home/auth/SignUpPage";
import { ProductPage } from "@/pages/products/ProductPage";
<<<<<<< HEAD
<<<<<<< HEAD
import { ProductLayout } from "@/pages/products/ProductLayout";
import { ItemsPage } from "@/pages/products/Items/page";
import { RegistraionPage } from "@/pages/products/registration/page";
<<<<<<< HEAD
=======
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
import { ProductLayout } from "@/pages/products/ProductLayout";
import { ItemsPage } from "@/pages/products/Items/page";
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
=======
>>>>>>> 127ba03 (Design: products/registration 페이지 디자인 완성)

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
<<<<<<< HEAD
<<<<<<< HEAD
      <Route path="/products" element={<ProductLayout />} >
        <Route index element={<ProductPage />} />
        <Route path="/products/items" element={<ItemsPage />} />
        <Route path="/products/registration" element={<RegistraionPage />} />
      </Route>
    </Routes>
  );
<<<<<<< HEAD
=======
      <Route path="/products" element={<ProductPage />} />
=======
      <Route path="/products" element={<ProductLayout />} >
        <Route index element={<ProductPage />} />
        <Route path="/products/items" element={<ItemsPage />} />
        <Route path="/products/registration" element={<RegistraionPage />} />
      </Route>
>>>>>>> f60f038 (feat: items페이지 추가, Outlet Context로 products페이지 코드 수정)
    </Routes>
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
=======
>>>>>>> 38982bb (Style: eslint설정및 컨벤션유지)
}