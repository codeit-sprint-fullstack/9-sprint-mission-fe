

export function initializePasswordToggle() {
  document.querySelectorAll(".toggle-password").forEach((icon) => {
    icon.addEventListener("click", () => {
      const input = icon.closest('.password-wrapper').querySelector('input');
      
      if (input.type === "password") {
        input.type = "text";
        icon.src = "./images/eyeon.svg";
        icon.alt = "비밀번호 보이기";
      } else {
        input.type = "password";
        icon.src = "./images/eyeoff.svg";
        icon.alt = "비밀번호 가리기";
      }
    });
  });
}