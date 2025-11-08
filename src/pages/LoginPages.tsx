import React, { useState, useEffect } from "react";
import "../assets/css/LoginPages.css";

interface LoginPageProps {
  onLoginSuccess: () => void;
  introVideoUrl?: string; // optional video intro
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  introVideoUrl,
}) => {
  const [showIntro, setShowIntro] = useState(!!introVideoUrl);

  useEffect(() => {
    if (introVideoUrl) {
      const timer = setTimeout(() => setShowIntro(false), 4000); // 4 giây intro
      return () => clearTimeout(timer);
    }
  }, [introVideoUrl]);

  if (showIntro && introVideoUrl) {
    return (
      <div className="intro-container">
        <video
          autoPlay
          muted
          className="intro-video"
          src={introVideoUrl}
        ></video>
      </div>
    );
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Đăng nhập / Đăng ký</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onLoginSuccess(); // chuyển sang MainPage
          }}
        >
          <input type="text" placeholder="Email / Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Đăng nhập</button>
        </form>
        <p>
          Chưa có tài khoản? <a href="#">Đăng ký</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
