export const validatePassword = (password, confirmPassword) => {
  const minLength = 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  console.log(password);

  if (password.length < minLength) {
    return '비밀번호는 최소 8자 이상이어야 합니다.';
  }
  if (!hasUpperCase) {
    return '비밀번호에는 최소 1개의 대문자가 포함되어야 합니다.';
  }
  if (!hasLowerCase) {
    return '비밀번호에는 최소 1개의 소문자가 포함되어야 합니다.';
  }
  if (!hasNumber) {
    return '비밀번호에는 최소 1개의 숫자가 포함되어야 합니다.';
  }
  if (!hasSpecialChar) {
    return '비밀번호에는 최소 1개의 특수 문자가 포함되어야 합니다.';
  }
  if (password !== confirmPassword) {
    return '비밀번호가 일치하지 않습니다.';
  }
};
