export function showModal(message) {
  const modal = document.querySelector(".modal");
  const modalMessage = modal.querySelector("#modal-message");
  const modalClose = modal.querySelector(".modal-close-btn");

  modalMessage.textContent = message;

  modal.style.display = "flex";

  modalClose.addEventListener("click", () => {
    modal.style.display = "none";
  });
}
