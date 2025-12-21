"use client"
import { createContext, useContext, useEffect, useState } from "react";

import { authService } from "@/services/auth-service";
import { userService } from "@/services/user-service";
import type { User } from "@/types/auth";

interface AuthContextType {
  user: User | null;
  isInitialized: boolean;
  login: (email: string, password: string) => Promise<void>
  signUp: (
    email: string,
    nickname: string,
    password: string,
    passwordConfirmation: string,
  ) => Promise<void>
}

interface AuthProviderProps {
  children: React.ReactNode
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
};

export default function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const getUser = async () => {
    try {
      const user = await userService.getMe();
      setUser(user)
    } catch (error) {
      console.error('사용자 정보 가져오기 실패', error)
      setUser(null)
    } finally {
      setIsInitialized(true)
    }
  }

  useEffect(() => {
    getUser();
  }, [])

  const login = async (email: string, password: string) => {
    try {
      await authService.login(email, password);
      await getUser();
    } catch (error) {
      console.error('로그인 실패:', error)
      throw error
    }
  };

  //TODO: logout 기능 추후 
  const signUp = async (
    email: string,
    nickname: string,
    password: string,
    passwordConfirmation: string
  ) => {
    try {
      await authService.register(email, nickname, password, passwordConfirmation)
      await login(email, password);
    } catch (error) {
      console.error('회원가입 실패:', error)
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ user, login, signUp, isInitialized }}>
      {children}
    </AuthContext.Provider>
  )
}