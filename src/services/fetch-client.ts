const API_URL = process.env.NEXT_PUBLIC_BASE_URL;

/** Next.js 전용 fetch 옵션과 호환되는 인터페이스 정의   */
interface CustomRequestInit extends Omit<RequestInit, 'cache'> {
  cache?: RequestCache;
  next?: {
    // Next 전용 확장 속성 정의
    revalidate?: number | false;
    tags?: string[];
  };
}

export const defaultFetch = async <T>(
  url: string,
  options: CustomRequestInit = {},
): Promise<T> => {
  const defaultOptions: CustomRequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const { headers: customHeaders, ...restOptions } = options;

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...restOptions,
    headers: {
      ...defaultOptions.headers,
      ...(customHeaders as Record<string, string>),
    },
  };

  const response = await fetch(`${API_URL}${url}`, mergedOptions);

  if (!response.ok) {
    const errorData = await response.json().catch(() => {});
    const errorMessage = errorData?.message || `API Error: ${response.status}`;
    throw new Error(errorMessage);
  }

  return response.json();
};

export const cookieFetch = async <T>(
  url: string,
  options: CustomRequestInit = {},
): Promise<T & { status: number; ok: boolean }> => {
  const defaultOptions: CustomRequestInit = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    cache: 'no-store',
  };

  const { headers: customHeaders, ...restOptions } = options;

  const mergedOptions: RequestInit = {
    ...defaultOptions,
    ...restOptions,
    headers: {
      ...defaultOptions.headers,
      ...(customHeaders as Record<string, string>),
    },
  };

  let response = await fetch(`${API_URL}${url}`, mergedOptions);

  if (response.status === 401 && url !== '/api/v1/auth/refresh-token') {
    try {
      const refreshResponse = await fetch(`/api/v1/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
      });

      if (refreshResponse.ok) {
        response = await fetch(`${url}`, mergedOptions);
      }
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
    }
  }
  if (!response.ok) {
    const errorData = await response.json().catch(() => {});
    const errorMessage = errorData.message || `API Error: ${response.status}`;
    throw new Error(errorMessage);
  }

  const contentType = response.headers.get('content-type');

  if (contentType && contentType.includes('application/json')) {
    const data = await response.json();
    return { ...data, status: response.status, ok: response.ok };
  }

  return { status: response.status, ok: response.ok } as T & {
    status: number;
    ok: boolean;
  };
};
