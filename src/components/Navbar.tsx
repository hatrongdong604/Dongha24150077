// src/components/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import "./Navbar.css";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="navbar">
      {/* Logo bên trái */}
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/b6/13/f9/b613f96d539eb174ffbc1fdb130be012.jpg"
          alt="Logo Đạo quán Hoyoverse"
          className="logo"
        />
        <span className="logo-text">Đạo quán Hoyoverse</span>
      </div>

      {/* Menu bên phải */}
      <ul className="menu">
        <li>
          <a
            href="https://genshin.hoyoverse.com/vi/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            Trang chủ
          </a>
        </li>
        <li>
          <Link to="/buon-hang">Buôn nhân vật</Link>
        </li>
        <li>
          <Link to="/download">Tải game</Link>
        </li>
        <li>
          <Link to="/news">Tin tức</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button onClick={onLogout} className="login-link">
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login" className="login-link">
              Login
            </Link>
          </li>
        )}
        <li>
          <Link to="/cart" className="cart-link">
            Giỏ hàng ({cartCount})
          </Link>
        </li>
      </ul>
    </nav>
  );
};
