function passwordVisibilityToggle() {
  // btn-visibility가 한 파일 내 여러 개 존재 (signup.html)
  const eyeBtns = document.querySelectorAll(".btn-visibility");

  const onEyeBtn = "../assets/icon/btn_visibility_on.svg";
  const offEyeBtn = "../assets/icon/btn_visibility_off.svg";

  eyeBtns.forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.parentElement.querySelector("input");
      const icon = button.querySelector(".btn-visibility-img");

      const isPassword = input.type === "password";

      input.type = isPassword ? "text" : "password";
      icon.src = isPassword ? onEyeBtn : offEyeBtn;
      icon.alt = isPassword ? "비밀번호 숨기기" : "비밀번호 보기";
    });
  });
}

passwordVisibilityToggle();
