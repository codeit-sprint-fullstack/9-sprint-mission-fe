export function userAlert(msg){
    const modalStatus = document.querySelector('.modal_container');
    const modalBg = document.querySelector('.modal_overlay')
    const alertMsg = document.querySelector('.modal_text');
    const alertBtn = document.querySelector('.modal_btn');

        modalStatus.style.display = "flex";
        alertMsg.textContent = msg;
        modalBg.style.display = "unset";
        alertBtn.addEventListener('click', () => {
        modalStatus.style.display = "none"
        modalBg.style.display = "none"});
}
