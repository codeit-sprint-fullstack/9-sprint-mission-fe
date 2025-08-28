
export const PW_CHECK_LENGTH = 8
/*
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
   * ^           - 문자열 시작 (맨 앞부터 검사 시작)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (이메일 아이디 부분)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (도메인 이름 부분)
   * \.          - '.' 문자 (도메인과 확장자 구분)
   * [^\s@]+     - 공백이나 '@'가 아닌 문자 1개 이상 (도메인 확장자 부분)
   * $           - 문자열 끝 (여기서 끝나야 됨)
   * const re = new RegExp("\\^[^\s@]+@[^\s@]+\.[^\s@]+$/");
   * @example
   * emailPattern.test('user@example.com'); // true
   * emailPattern.test('invalid@com');      // false
   */
export const EMAIL_REG = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * 1.     검증 이메일 
 * 1-1.   공백  제거 포함 이메일 형식 검증 입력값을 검증하고 오류 메시지를 표시
 * TODO   최상위 도메인 검증
 * 
 * @param {HTMLInputElement} email // input값 
 * @returns {boolean} 
 */
export function validateEmail(email) {
  return EMAIL_REG.test((email).trim());
}

/**
 * 2.     공백 제거한 비밀번호를, 비밀 번호 길이 검증
 * 2-1.   빈문자열 , 8자리이하 false리턴
 * @param {String} password 
 * @returns {boolean} 
 */
export function validatePassword(password) {
  return (password || "").trim().length >= PW_CHECK_LENGTH;
}