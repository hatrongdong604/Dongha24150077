// src/components/Navbar.tsx
import React from "react";
import logo from "../assets/images/logo.png";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <ul className="menu">
        <li>Trang chủ</li>
        <li>Nhân vật</li>
        <li>Tải game</li>
        <li>Tin tức</li>
      </ul>
    </nav>
  );
};
