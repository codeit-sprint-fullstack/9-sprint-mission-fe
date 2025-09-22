<<<<<<< HEAD
import { Link } from "react-router-dom";

export function AuthTitle() {
  return (
    <div className="auth-header">
      <Link to="/"><img src='/images/logo.png' alt="판다마켓 로고" /></Link>
      <p>판다마켓</p>
    </div>
  );
=======
export function AuthTitle() {
  return (
    <div className="auth-header">
      <a href="/"><img src='/images/logo.png' alt="판다마켓 로고" /></a>
      <p>판다마켓</p>
    </div>
  )
>>>>>>> c0ce3ff (Refactor: 리액트로 코드 리팩토링)
}