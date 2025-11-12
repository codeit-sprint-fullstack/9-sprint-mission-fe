import AuthProvider from "@/providers/AuthProvider";
import RouteGuard from "@/providers/RouteGuard";

export default function Provider({ children }) {
  return (
    <>
      <AuthProvider>
        <RouteGuard>{children}</RouteGuard>
      </AuthProvider>
    </>
  );
}
