import { NextResponse } from 'next/server';

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data: T | null;
  errors?: any;
}

export const apiResponse = <T>(
  success: boolean,
  message: string,
  data: T | null = null,
  status: number,
  errors: any = null,
) => {
  const responseBody: ApiResponse<T> = {
    success,
    message,
    data,
    errors,
  };

  return NextResponse.json({ responseBody }, { status });
};
