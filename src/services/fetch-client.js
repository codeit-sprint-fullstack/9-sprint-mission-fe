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
