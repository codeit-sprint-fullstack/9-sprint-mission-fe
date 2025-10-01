import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">
            <img src="images/logo.png" alt="판다마켓 로고" />
            <span>판다마켓</span>
          </Link>
        </div>

        <ul className="navbar-menu">
          <li>
            <NavLink 
              to="/board" 
              className={({ isActive }) => (isActive ? "active" : "")}>
              자유게시판
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/items" 
              className={({ isActive }) => (isActive ? "active" : "")}>
              중고마켓
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="navbar-login">로그인</button>
    </nav>
  );
}

export default NavBar;
