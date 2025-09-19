import React from 'react';
import '../assets/css/signup.css';
import logoImg from '../assets/images/panda-face.svg';
import eyeOff from '../assets/images/eyeoff.svg';
import googleIcon from '../assets/images/google.svg';
import kakaoIcon from '../assets/images/kakao.svg';

function SignupPage() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* 로고 및 브랜드 */}
        <header className="login-header">
          <a href="/">
            <img className="brand-logo" src={logoImg} alt="판다 로고" />
            <h1 className="logo">판다마켓</h1>
          </a>
        </header>

        {/* 회원가입 폼 */}
        <main className="login-main">
          <form id="signupForm" noValidate>
            <div className="input-group">
              <label htmlFor="signupEmail">이메일</label>
              <input type="email" id="signupEmail" name="email" placeholder="이메일을 입력해주세요" required />
              <div id="signupEmailError" className="error-message" aria-live="polite"></div>
            </div>

            <div className="input-group">
              <label htmlFor="signupName">닉네임</label>
              <input type="text" id="signupName" name="name" placeholder="닉네임을 입력해주세요" required />
              <div id="signupNameError" className="error-message" aria-live="polite"></div>
            </div>

            <div className="input-group password-group">
              <label htmlFor="signupPassword">비밀번호</label>
              <div className="password-wrapper">
                <input type="password" id="signupPassword" name="password" placeholder="비밀번호를 입력해주세요" required />
                <img src={eyeOff} alt="비밀번호 보이기" className="toggle-password" role="button" />
              </div>
              <div id="signupPasswordError" className="error-message" aria-live="polite"></div>
            </div>

            <div className="input-group password-group">
              <label htmlFor="signupPasswordConfirm">비밀번호 확인</label>
              <div className="password-wrapper">
                <input type="password" id="signupPasswordConfirm" name="passwordConfirm" placeholder="비밀번호를 다시 입력해주세요" required />
                <img src={eyeOff} alt="비밀번호 보이기" className="toggle-password" role="button" />
              </div>
              <div id="signupPasswordConfirmError" className="error-message" aria-live="polite"></div>
            </div>
          <button type="submit" class="btn-primary" disabled>회원가입</button>
            
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
            <span>이미 회원이신가요?</span>
            <a href="/login">로그인</a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default SignupPage;
