

const modalOverlay = document.querySelector('#modalOverlay');
const modalMessage = document.querySelector('#modalMessage');
const originalModalButton = document.querySelector('#modalButton');

function hideModal() {
  if (modalOverlay) {
    modalOverlay.classList.add('hidden');
  }
}

export function showModal(message, onConfirm) {
  if (!modalOverlay || !modalMessage || !originalModalButton) return;
  
  modalMessage.textContent = message;
  modalOverlay.classList.remove('hidden');

  
  const newModalButton = originalModalButton.cloneNode(true);
  originalModalButton.parentNode.replaceChild(newModalButton, originalModalButton);
  
  const eventHandler = () => {
    hideModal();
    if (typeof onConfirm === 'function') {
      onConfirm();
    }
  };
  
  newModalButton.addEventListener('click', eventHandler, { once: true });
}


if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      hideModal();
    }
  });
}