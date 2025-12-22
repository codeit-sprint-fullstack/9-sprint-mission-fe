export const formatDate = (
  dataString: string | number | Date | undefined | null,
) => {
  if (!dataString) return '';

  const date = new Date(dataString);
  return date.toLocaleDateString('Ko-KR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });
};

export const truncateText = (
  text: string | undefined | null,
  maxLength: number,
): string => {
  if (!text) return '';
  if (text.length > maxLength) return `${text.slice(0, maxLength)}...`;
  return text;
};

export const truncateDate = (
  text: string | Date | undefined | null,
  maxLength: number,
): string => {
  if (!text) return '';
  // Date Object 라면 문자열 ISO형식으로 변환
  const targetString = text instanceof Date ? text.toISOString() : String(text);
  if (targetString.length > maxLength) return targetString.slice(0, maxLength);
  return targetString;
};
