
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  // ...
];

// 이메일로 사용자를 찾음
export const findUserByEmail = (email) => {
  return USER_DATA.find(user => user.email === email);
};

// 이메일 존재 여부 확인
export const doesUserExist = (email) => {
  return USER_DATA.some(user => user.email === email);
};

// 새 사용자 추가
export const addUser = (newUser) => {
  USER_DATA.push(newUser);
};