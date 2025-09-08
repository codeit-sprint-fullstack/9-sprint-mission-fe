

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

  // 이벤트 중복을 막기 위해 버튼을 복제하여 기존 이벤트를 제거
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

// 모달 외부 클릭 시 닫기
if (modalOverlay) {
  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      hideModal();
    }
  });
}