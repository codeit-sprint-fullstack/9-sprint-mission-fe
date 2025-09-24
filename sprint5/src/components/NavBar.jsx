import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo"> 
         <img src="images/logo.png" alt="판다마켓 로고" />
         <span>판다마켓</span>
        </div>
        <ul className="navbar-menu">
          <li>자유게시판</li>
          <li>중고마켓</li>
        </ul>
      </div>
      <button className="navbar-login">로그인</button>
    </nav>
  );
}

export default NavBar;
