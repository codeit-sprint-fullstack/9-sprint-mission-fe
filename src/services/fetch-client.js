export const defaultFetch = async (url, options = {}) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(`${apiURL}${url}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
};

export const cookieFetch = async (url, options = {}) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    cache: 'no-store',
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  let response = await fetch(`${apiURL}${url}`, mergedOptions);

  if (response.status === 401 && url !== '/auth/refresh-token') {
    try {
      const refreshResponse = await fetch(`${apiURL}/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include',
        cache: 'no-store',
      });

      if (refreshResponse.ok) {
        response = await fetch(`${apiURL}${url}`, mergedOptions);
      }
    } catch (error) {
      console.error('토큰 갱신 실패:', error);
    }
  }

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return response.json();
  }

  return { status: response.status, ok: response.ok };
};
