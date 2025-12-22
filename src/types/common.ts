export type FetchResponse<T> = {
  status: number;
  ok: boolean;
  data: T;
};
