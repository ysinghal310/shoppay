export const validateEmail = (email) => {
  if (!email) return;
  const regexSt = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  return regexSt.test(email);
};
