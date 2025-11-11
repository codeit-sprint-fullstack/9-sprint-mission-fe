import { createContext, useContext, useEffect, useState } from "react";

import { authService } from "@/services/auth-service";
import { userService } from "@/services/user-service";

const AuthContext = createContext({
  login: () => { },
  logout: () => { },
  user: null,
  updateUser: () => { },
  register: () => { },
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

  const register = async (name, email, password) => {
    await authService.register(name, email, password)
  }

  const login = async (email, password) => {
    await authService.login(email, password);
    await getUser();
  }

  const updateUser = async (user) => {
    const updatedUser = await userService.updateMe(user);
    setUser(updatedUser);
  }

  useEffect(() => {
    setTimeout(() => {
      getUser();
    }, 0)
  }, [])

  return (
    <AuthProvider.Provider value={{ user, login, updateUser, register, isInitialized }}>
      {children}
    </AuthProvider.Provider>
  )
}


