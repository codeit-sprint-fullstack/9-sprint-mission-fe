import { z } from 'zod';

const commonSchema = {
  name: z
    .string()
    .min(1, '제목을 입력해주세요.')
    .max(30, '제목은 30자 이내로 입력해주세요.'),
  description: z
    .string()
    .min(10, '내용은 10자 이상 입력해주세요.')
    .max(100, '내용은 100자 이내로 입력해주세요.'),
  price: z.string().min(1, '가격을 입력해주세요.'),
};

const tagItemSchema = z
  .string()
  .min(1, '태그 내용을 입력해주세요.')
  .max(5, '태그는 5자 이하로 해주세요');

export const itemFormSchema = z.object({
  ...commonSchema,
  tags: z
    .string()
    .min(1, '태그를 입력해주세요')
    .transform((val) =>
      val
        .split(',')
        .map((tag) => tag.trim())
        .filter(Boolean),
    )
    .pipe(
      z
        .array(tagItemSchema)
        .min(1, '최소 1개 이상의 태그를 입력해주세요.')
        .max(5, '태그는 최대 5개까지만 입력 가능합니다.'),
    ),
});

export const backendItemFormSchema = z.object({
  ...commonSchema,
  tags: z
    .array(tagItemSchema)
    .min(1, '최소 1개 이상의 태그를 입력해주세요.') // 배열 전체의 최소 길이
    .max(5, '태그는 최대 5개까지만 입력 가능합니다.'), // 배열 전체의 최대 길이
});

/**
 * Form InitialValue
 * zod의 transform 때문에 input은 string output은 string[]이 된다.
 * z.infer은 기본적으로 출력  타입 추출 (input - output value conflict!)
 * 그러므로 z.input으로 입력 기준타입을 별도 추출
 */
export type ItemFormInput = z.input<typeof itemFormSchema>;
/** Form AfterValue */
export type ItemFormOutput = z.output<typeof itemFormSchema>;
export type BackendItemFormValue = z.infer<typeof backendItemFormSchema>;
