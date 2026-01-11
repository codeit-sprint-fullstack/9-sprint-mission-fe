import AuthProvider from "@/providers/AuthProvider";
import QueryProvider from "@/providers/QueryProvider";
import RouteGuard from "@/providers/RouteGuard";

export default function Provider({ children }) {
  return (
    <>
      <AuthProvider>
        <RouteGuard>
          <QueryProvider>{children}</QueryProvider>
        </RouteGuard>
      </AuthProvider>
    </>
  );
}
