/*

    2025. 09. 01

    파 일 : script/script.js

    내 용 : 웹 페이지의 공통 자바스크립트 함수

    김유신

*/


/*  모달 창   */
function alert_modal(message) {
  const body = document.body;
  const modalWindow = document.createElement('div');
  const modal = document.createElement('div');
  const span = document.createElement('span');
  const button = document.createElement('button');
  
  // 모달창 html 요소 제작
  modalWindow.setAttribute('class', 'modal-outter');
  modal.setAttribute('class', 'modal-main');
  span.setAttribute('class', 'modal-message');
  span.textContent = message;
  button.classList.add('button', 'modal-button')
  button.textContent = "확인";

  modalWindow.appendChild(modal);
  modal.appendChild(span);
  modal.appendChild(button);
  
  modal.parentElement.style.display = 'block';
  body.appendChild(modalWindow);

  // 버튼 이벤트 등록
  button.addEventListener('click', function eventListener(event) {
    modalWindow.style.display = "none";

    // 이벤트 리스너 제거
    button.removeEventListener('click', eventListener);
  });
  

}


