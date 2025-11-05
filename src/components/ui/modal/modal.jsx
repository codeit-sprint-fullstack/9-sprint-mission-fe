export function Modal({ close, msg, children }) {

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.7)] z-10">
      <div className='fixed bg-white left-[50%] right-[50%] top-[50%] bottom-[50%] w-135 h-62.5 translate-[-50%, -50%] rounded-lg flex-col justify-center items-center z-2'>
        <p className="text-gray-800 text-center text-lg font-pretendard font-medium">{msg}</p>
        <button className="absolute right-2.5 bottom-2.5 border-0 rounded-lg w-32 h-12  py-3 px-6 text-center bg-primary-100 font-pretendard text-base font-semibold text-white" onClick={close}>확인</button>
        {children}
      </div>
    </div >
  );
}