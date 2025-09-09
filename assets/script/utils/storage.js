
const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
  { email: 'codeit2@codeit.com', password: "codeit202!" },
  // ...
];


export const findUserByEmail = (email) => {
  return USER_DATA.find(user => user.email === email);
};


export const doesUserExist = (email) => {
  return USER_DATA.some(user => user.email === email);
};


export const addUser = (newUser) => {
  USER_DATA.push(newUser);
};