import React, { useState, useEffect } from "react";
import "../assets/css/LoginPages.css";
import { loginUser, registerUser } from "../supabase/authClient";

interface LoginPageProps {
  onLoginSuccess: () => void;
  introVideoUrl?: string;
}

const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  introVideoUrl,
}) => {
  const [showIntro, setShowIntro] = useState(!!introVideoUrl);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Hiện intro video 4 giây
  useEffect(() => {
    if (introVideoUrl) {
      const timer = setTimeout(() => setShowIntro(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [introVideoUrl]);

  // Nếu đang hiển thị intro thì chỉ render video
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

  // Xử lý đăng nhập hoặc đăng ký
  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const action = isRegister ? registerUser : loginUser;
      const { data, error } = await action(email, password);

      if (error) {
        setMessage(`❌ ${error.message}`);
      } else {
        if (isRegister) {
          setMessage("✅ Đăng ký thành công! Hãy đăng nhập lại.");
          setIsRegister(false);
        } else {
          setMessage("✅ Đăng nhập thành công!");
          onLoginSuccess();
        }
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Lỗi kết nối Supabase, vui lòng thử lại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>{isRegister ? "Đăng ký tài khoản" : "Đăng nhập"}</h1>

        <form onSubmit={handleAuth}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" disabled={loading}>
            {loading
              ? "⏳ Đang xử lý..."
              : isRegister
              ? "Tạo tài khoản"
              : "Đăng nhập"}
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="switch-mode" onClick={() => setIsRegister(!isRegister)}>
          {isRegister
            ? "Đã có tài khoản? Đăng nhập"
            : "Chưa có tài khoản? Đăng ký"}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
