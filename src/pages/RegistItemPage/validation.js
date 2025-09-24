export const itemNameValidation = (value) => {
  if (!value) return '상품명은 반드시 입력해야 합니다.';
  if (value.length > 10) return '10자 이내로 입력해주세요.';
  return '';
};

export const itemContextValidation = (value) => {
  if (!value) return '상품 소개는 반드시 입력해야 합니다.';
  if (value.length < 10) return '10자 이상 입력해주세요.';
  if (value.length > 100) return '100자 이내로 입력해주세요';
  return '';
};

export const itemPriceValidation = (value) => {
  if (!value) return '판매 가격은 반드시 입력해야 합니다.';
  if (isNaN(value)) return '숫자로 입력해주세요.';
  return '';
};

export const itemTagValidation = (value) => {
  if (!value) return '태그는 반드시 입력해야 합니다.';
  if (value.length > 5) return '5글자 이내로 입력해주세요.';
  return '';
};
