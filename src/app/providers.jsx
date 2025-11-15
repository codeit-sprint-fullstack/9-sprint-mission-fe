import AuthProvider from "@/providers/auth-provider";
import { DialogProvider } from "@/providers/modal-context";
import RouteGuard from "@/providers/route-guard";

export function Providers({ children }) {
  return (
    <AuthProvider>
      <RouteGuard >
        <DialogProvider>
          {children}
        </DialogProvider>
      </RouteGuard>
    </AuthProvider>
  )
}