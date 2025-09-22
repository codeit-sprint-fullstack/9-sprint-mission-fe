import { Route, Routes } from "react-router-dom";

import { HomeLayout } from "@/pages/home/HomeLayout";
import { LoginPage } from "@/pages/home/auth/LoginPage";
import { SignUpPage } from "@/pages/home/auth/SignUpPage";
import { ProductPage } from "@/pages/products/ProductPage";
<<<<<<< HEAD
import { ProductLayout } from "@/pages/products/ProductLayout";
import { ItemsPage } from "@/pages/products/Items/page";
import { RegistraionPage } from "@/pages/products/registration/page";
=======
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
<<<<<<< HEAD
      <Route path="/products" element={<ProductLayout />} >
        <Route index element={<ProductPage />} />
        <Route path="/products/items" element={<ItemsPage />} />
        <Route path="/products/registration" element={<RegistraionPage />} />
      </Route>
    </Routes>
  );
=======
      <Route path="/products" element={<ProductPage />} />
    </Routes>
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}