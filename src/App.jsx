import { Route, Routes } from "react-router-dom";

import { HomeLayout } from "@/pages/home/HomeLayout";
import { LoginPage } from "@/pages/home/auth/LoginPage";
import { SignUpPage } from "@/pages/home/auth/SignUpPage";
import { ProductPage } from "@/pages/products/ProductPage";
import { ProductLayout } from "@/pages/products/ProductLayout";
import { ItemsPage } from "@/pages/products/Items/page";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products" element={<ProductLayout />} >
        <Route index element={<ProductPage/>}/>
        <Route path="/products/items" element={<ItemsPage/>}/>
      </Route>
    </Routes>
  )
}