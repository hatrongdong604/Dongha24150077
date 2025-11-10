import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // nhớ tạo file CSS nếu bạn chưa có

export const Navbar: React.FC = () => {
  return (
    <nav className="Navbar">
      {/* Logo + tên trang */}
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/b6/13/f9/b613f96d539eb174ffbc1fdb130be012.jpg"
          alt="Logo Đạo quán Hoyoverse"
          className="logo"
        />
        <span className="logo-text">Đạo quán Hoyoverse</span>
      </div>

      {/* Menu điều hướng */}
      <ul className="menu">
        <li>
          <Link to="/">Trang chủ</Link>
        </li>
        <li>
          <Link to="/characters">Nhân vật</Link>
        </li>
        <li>
          <Link to="/download">Tải game</Link>
        </li>
        <li>
          <Link to="/news">Tin tức</Link>
        </li>
        <li>
          <Link to="/login" className="login-link">
            Login
          </Link>
        </li>

        {/* 🔗 Thêm liên kết ngoài – Trang chủ chính thức Genshin Impact */}
        <li>
          <a
            href="https://genshin.hoyoverse.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="official-link"
          >
            Trang chủ Genshin Impact 🌐
          </a>
        </li>
      </ul>
    </nav>
  );
};
