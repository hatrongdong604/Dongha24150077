// src/components/Navbar.tsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../contexts/CartContext";
import { getUserProfile, logoutUser } from "../supabase/authClient";
import "./Navbar.css";

interface NavbarProps {
  isLoggedIn: boolean;
  onLogout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isLoggedIn, onLogout }) => {
  const { items } = useCart();
  const cartCount = items.reduce((sum, item) => sum + item.qty, 0);

  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [profile, setProfile] = useState<{ username: string; avatar_url?: string } | null>(null);

  // Lấy profile khi logged in
  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const data = await getUserProfile();
        if (data) setProfile({ username: data.username, avatar_url: data.avatar_url });
      })();
    } else {
      setProfile(null);
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    await logoutUser();
    onLogout();
    setUserMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/736x/b6/13/f9/b613f96d539eb174ffbc1fdb130be012.jpg"
          alt="Logo Đạo quán Hoyoverse"
          className="logo"
        />
        <span className="logo-text">Đạo quán Hoyoverse</span>
      </div>

      {/* Menu */}
      <ul className="menu">
        <li>
          <a href="https://genshin.hoyoverse.com/vi/home" target="_blank" rel="noopener noreferrer">
            Trang chính
          </a>
        </li>
        <li><Link to="/buon-hang">Buôn nhân vật</Link></li>
        <li>
          <a href="https://www.facebook.com/groups/genshin.vi/?locale=vi_VN" target="_blank" rel="noopener noreferrer">
            Cộng Đồng
          </a>
        </li>
        <li>
          <a href="https://genshin.hoyoverse.com/vi/news" target="_blank" rel="noopener noreferrer">
            Tin tức
          </a>
        </li>
        <li>
          <Link to="/cart" className="cart-link">Giỏ hàng ({cartCount})</Link>
        </li>

        {/* User Avatar / Login */}
        <li className="user-menu-container" style={{ marginLeft: "20px" }}>
          {isLoggedIn ? (
            <>
              <img
                src={profile?.avatar_url || "https://i.pravatar.cc/40"}
                alt="User avatar"
                className="user-avatar"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />
              {userMenuOpen && (
                <div className="user-dropdown">
                  <p>{profile?.username || "Người dùng"}</p>
                  <button className="logout-button" onClick={handleLogout}>Logout</button>
                  <Link to="/" className="back-home">Quay lại Đạo quán Hoyoverse</Link>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="login-link">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
