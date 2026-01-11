'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuth } from './auth-provider';

interface RouteGuardProps {
  children: React.ReactNode;
}

const PROTECTED_PATHS = ['/articles', '/items'] as const;

const PUBLIC_PATHS = ['/', '/login', '/signup'] as const;

export default function RouteGuard({ children }: RouteGuardProps) {
  const { user, isInitialized } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isInitialized) return;
    const currentPath = pathname?.split('?')[0] ?? '';

    const isProtectedRoute = PROTECTED_PATHS.some(
      (route) => currentPath === route || currentPath.startsWith(`${route}/`),
    );

    const isPublicRoute = PUBLIC_PATHS.some(
      (route) =>
        currentPath === route ||
        (currentPath.startsWith(route + '/') && route !== '/'),
    );

    if (isProtectedRoute && !user) {
      router.push('/login');
    }

    if (isPublicRoute && user && currentPath !== '/') {
      router.push('/articles');
    }
  }, [user, pathname, router, isInitialized]);

  if (!isInitialized) return null;

  return children;
}
