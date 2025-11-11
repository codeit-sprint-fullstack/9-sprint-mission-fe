"use client"
import { createContext, useContext, useEffect, useState } from "react";

import { authService } from "@/services/auth-service";
import { userService } from "@/services/user-service";

const AuthContext = createContext({
  user: null,
  login: () => { },
  updateUser: () => { },
  signUp: () => { },
  isInitialized: false,
});

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
};

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  const getUser = async () => {
    try {
      const user = await userService.getMe();
      setUser(user)
    } catch (error) {
      console.error("사용자 정보를 가져오는데 실패했습니다:.", error)
      setUser(null)
    } finally {
      setIsInitialized(true)
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  const signUp = async (email, nickname, password, passwordConfirmation) => {
    try {
      await authService.register(email, nickname, password, passwordConfirmation)
      // 회원가입 시 바로 로그인 시도
      await login(email, password);
    } catch (error) {
      console.error('회원가입 실패:', error)
      throw error
    }
  }

  const login = async (email, password) => {
    try {
      await authService.login(email, password);
      await getUser();
    } catch (error) {
      console.error('로그인 실패:', error)
      throw error
    }
  };

  const updateUser = async (user) => {
    const updatedUser = await userService.updateMe(user);
    setUser(updatedUser);
  }


  return (
    <AuthContext.Provider value={{ user, login, updateUser, signUp, isInitialized }}>
      {children}
    </AuthContext.Provider>
  )
}


