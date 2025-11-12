"use client";

import { authService } from "@/lib/services/authServices";
import AlertMessageBox from "@/components/common/AlertMessageBox";
import { userService } from "@/lib/services/userServices";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({
  login: () => {},
  logout: () => {},
  user: null,
  updateUser: () => {},
  signup: () => {},
});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    message: "",
    isSuccess: false,
  });
  const router = useRouter();

  const getUser = async () => {
    try {
      const user = await userService.getMe();
      setUser(user);
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다:", error);
      setUser(null);
    } finally {
      setIsInitialized(true);
    }
  };

  const signup = async (email, nickname, password, passwordConfirmation) => {
    try {
      await authService.signup(email, nickname, password, passwordConfirmation);
      await getUser();
      setModalState({
        isOpen: true,
        message: "회원가입에 성공했습니다. 메인 페이지로 이동합니다.",
        isSuccess: true,
      });
    } catch (error) {
      setModalState({
        isOpen: true,
        message: error.message || "회원가입에 실패했습니다.",
        isSuccess: false,
      });
    }
  };

  const login = async (email, password) => {
    try {
      await authService.login(email, password);
      await getUser();
      setModalState({
        isOpen: true,
        message: "로그인에 성공했습니다. 메인 페이지로 이동합니다.",
        isSuccess: true,
      });
    } catch (error) {
      setModalState({
        isOpen: true,
        message: error.message || "로그인에 실패했습니다.",
        isSuccess: false,
      });
      console.log(error);
    }
  };

  const logout = async () => {
    /** @TODO 로그아웃 로직 구현 */
    console.log("로그아웃");
    await authService.logout();
    setUser(null);
  };

  const handleCloseModal = () => {
    const { isSuccess } = modalState;
    setModalState({ isOpen: false, message: "", isSuccess: false });

    if (isSuccess) {
      router.push("/");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 0);
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, signup, isInitialized }}
    >
      {children}{" "}
      {modalState.isOpen && (
        <AlertMessageBox
          message={modalState.message}
          onClose={handleCloseModal}
        />
      )}
    </AuthContext.Provider>
  );
}
