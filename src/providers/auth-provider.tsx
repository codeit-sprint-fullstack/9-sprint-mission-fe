"use client"
import { createContext, useContext, useEffect, useState } from "react";

import type { loginFormSchema, signupFormSchema } from "@/libs/schemas/auth.schema";
import { authService } from "@/services/auth-service";
import { userService } from "@/services/user-service";
import type { User } from "@/types/auth";

interface AuthContextType {
  user: User | null;
  isInitialized: boolean;
  login: (data: loginFormSchema) => Promise<void>
  signUp: (data: signupFormSchema) => Promise<void>
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context;
};

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const getUser = async () => {
    try {
      const response = await userService.getMe();
      if (response.ok) {
        setUser(user)
      }
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

  const login = async (data: loginFormSchema) => {
    try {
      await authService.login(data);
      await getUser();
    } catch (error) {
      console.error('로그인 실패:', error)
      throw error
    }
  };

  //TODO: logout 기능 추후 
  const signUp = async (
    data: signupFormSchema
  ) => {
    try {
      await authService.register(data)
      await login({ email: data.email, password: data.password });
    } catch (error) {
      console.error('회원가입 실패:', error)
      throw error
    }
  }

  const logout = () => {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, signUp, isInitialized, logout }}>
      {children}
    </AuthContext.Provider>
  )
}