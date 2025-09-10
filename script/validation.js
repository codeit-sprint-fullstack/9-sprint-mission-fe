export function isEmailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function isPasswordValid(password) {
  return password.length >= 8;
}

export function isPasswordCheked(passwordConfirmValue) {
  const passwordInput = document.querySelector("#password");
  return passwordConfirmValue === passwordInput.value;
}

export function showError(input, errorMessage) {
  input.classList.add("input-error");
  const errorDiv = document.getElementById(`${input.id}-error`);
  if (errorDiv) errorDiv.textContent = errorMessage;
}

export function deleteError(input) {
  input.classList.remove("input-error");
  const errorDiv = document.getElementById(`${input.id}-error`);
  if (errorDiv) errorDiv.textContent = "";
}

export function checkedInputAll(inputs) {
  return inputs.every(
    (input) => input.value && !input.classList.contains("input-error")
  );
}
