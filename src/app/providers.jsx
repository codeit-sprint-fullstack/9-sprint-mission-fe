import AuthProvider from "@/providers/auth-provider";
import RouteGuard from "@/providers/route-guard";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <RouteGuard >{children}</RouteGuard>
    </AuthProvider>
  )
}