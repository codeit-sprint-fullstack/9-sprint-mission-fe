export type CommonResponse<T> = {
  success: boolean;
  message: string;
  data: T;
  pagination?: {
    limit: number;
    page: number;
    total: number;
    totalPage: 0;
  };
};

export type FetchResponse<T> = T | { status: number; ok: boolean };
