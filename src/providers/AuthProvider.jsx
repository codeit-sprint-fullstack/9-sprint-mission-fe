"use client";
import profile from "@/public/images/profile.png";
import { authService } from "@/lib/services/auth";
import { userService } from "@/lib/services/user";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

// context 전역 상태 저장소
const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  register: () => {},
  updateUser: () => {},
  user: null,
  isInitialized: false,
});

export const useAuth = () => useContext(AuthContext);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const getUser = async () => {
    try {
      const userData = await userService.getMe();
      console.log("userData", userData);
      const userWithProfile = {
        ...userData,
        image: userData.image || profile.src,
      };

      setUser(userWithProfile);
    } catch (error) {
      console.error("사용자 정보를 불러오는데 실패!", error);
      setUser(null);
    } finally {
      setIsInitialized(true);
    }
  };

  const register = async (email, nickname, password, passwordConfirm) => {
    await authService.signUp(email, nickname, password, passwordConfirm);
  };

  const login = async (email, password) => {
    const result = await authService.login(email, password);

    localStorage.setItem("token", result.accessToken);
    localStorage.setItem("refreshToken", result.refreshToken);

    await getUser();
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setUser(null);
    router.replace("/login");
  };

  const updateUser = async (data) => {
    const updated = await userService.updateMe(data);
    const updatedWithProfile = {
      ...updated,
      image: updated.image || profile.src,
    };

    setUser(updatedWithProfile);
  };

  useEffect(() => {
    if (pathname === "/login" || pathname === "/signup") {
      setIsInitialized(true);
      return;
    }
    getUser();
  }, [pathname]);

  return (
    <AuthContext.Provider
      value={{ user, isInitialized, login, logout, register, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
