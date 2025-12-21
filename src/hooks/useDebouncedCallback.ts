import { useCallback, useEffect, useRef } from 'react';

/**
 * @param func - Debounce 할 콜백 함수
 * @param wait - 대기시간 (ms)
 * @returns 디바운스된 함수
 */
export function useDebouncedCallback<T extends (...args: any[]) => any>(
  func: T,
  wait: number,
) {
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const funcRef = useRef(func);

  // 항상 최신 함수 참조 (node.js browser setTimeout  디바운스 타이머 유지)
  useEffect(() => {
    funcRef.current = func;
  }, [func]);

  // 타이머 정리
  useEffect(() => {
    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);

  // Debounce로직이 담긴 실제 함수 반환
  return useCallback(
    (...args: Parameters<T>) => {
      //  기존 타이머 취소
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
      // 새 타이머 설정
      timeout.current = setTimeout(() => {
        funcRef.current(...args);
      }, wait);
    },
    [wait],
  );
}
