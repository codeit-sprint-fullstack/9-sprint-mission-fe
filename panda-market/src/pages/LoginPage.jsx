import React from 'react';
import '../assets/css/login.css';
import logoImg from '../assets/images/panda-face.svg';
import eyeOff from '../assets/images/eyeoff.svg';
import googleIcon from '../assets/images/google.svg';
import kakaoIcon from '../assets/images/kakao.svg';

function LoginPage() {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* 로고 및 브랜드 */}
        <header className="login-header">
          <a href="/">
            <img className="brand-logo" src={logoImg} alt="판다 로고" />
            <h1 className="logo">판다마켓</h1>
          </a>
        </header>

        {/* 로그인 폼 */}
        <main className="login-main">
          <form id="loginForm" noValidate>
            <div className="input-group">
              <label htmlFor="loginEmail">이메일</label>
              <input
                type="email"
                id="loginEmail"
                name="email"
                placeholder="이메일을 입력해주세요"
                autoComplete="off"
                required
              />
              <div id="loginEmailError" className="error-message" aria-live="polite"></div>
            </div>

            <div className="input-group password-group">
              <label htmlFor="loginPassword">비밀번호</label>
              <div className="password-wrapper">
                <input
                  type="password"
                  id="loginPassword"
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                />
                <img
                  src={eyeOff}
                  alt="비밀번호 숨기기"
                  className="toggle-password"
                  role="button"
                />
              </div>
              <div id="loginPasswordError" className="error-message" aria-live="polite"></div>
            </div>

             <button type="submit" class="btn-primary" disabled>로그인</button>

          </form>

          {/* 소셜 로그인 */}
          <div className="social-login">
            <p>간편 로그인하기</p>
            <div className="social-icons">
              <a href="https://www.google.com/" className="social-btn google" aria-label="구글 로그인">
                <img src={googleIcon} alt="구글 로고" />
              </a>
              <a href="https://www.kakaocorp.com/page/" className="social-btn kakao" aria-label="카카오 로그인">
                <img src={kakaoIcon} alt="카카오 로고" />
              </a>
            </div>
          </div>

          <div className="signup-container">
            <span>판다마켓이 처음이신가요?</span>
            <a href="/signup">회원가입</a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
