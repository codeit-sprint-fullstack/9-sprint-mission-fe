// FormData 용 헤더 미포함
const formDataFetch = async (url, options = {}) => {
  const apiURL = process.env.NEXT_PUBLIC_API_URL;
  const defaultOptions = {
    credential: 'include',
    cache: 'no-store',
  };

  const mergedOptions = {
    ...defaultOptions,
    ...options,
  };

  const response = await fetch(`${apiURL}${url}`, mergedOptions);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  try {
    return await response.json();
  } catch (error) {
    return { status: response.status, ok: response.ok };
  }
};
