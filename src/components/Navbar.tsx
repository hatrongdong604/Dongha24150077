import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const [profile, setProfile] = useState<{
    username: string;
    avatar_url?: string;
  } | null>(null);

  useEffect(() => {
    if (isLoggedIn) {
      (async () => {
        const data = await getUserProfile();
        if (data)
          setProfile({ username: data.username, avatar_url: data.avatar_url });
      })();
    } else {
      setProfile(null);
    }
  }, [isLoggedIn]);

  const handleLogout = async () => {
    await logoutUser();
    onLogout();
    navigate("/"); // quay về trang chủ
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <nav className="navbar">
      {/* Logo luôn hiển thị bên trái */}
      <div
        className="logo-container"
        onClick={() => navigate("/")}
        style={{ cursor: "pointer" }}
      >
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
          <a href="/" onClick={handleHomeClick}>
            Trang chủ
          </a>
        </li>
        <li>
          <Link to="/buon-hang">Buôn nhân vật</Link>
        </li>
        <li>
          <a
            href="https://www.facebook.com/groups/genshin.vi/?locale=vi_VN"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cộng đồng
          </a>
        </li>
        <li>
          <a
            href="https://genshin.hoyoverse.com/vi/news"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tin tức
          </a>
        </li>
        <li>
          <Link to="/cart" className="cart-link">
            Giỏ hàng ({cartCount})
          </Link>
        </li>

        {/* Góc phải: Logout + Avatar hoặc Login */}
        <li className="user-menu-container" style={{ marginLeft: "20px" }}>
          {isLoggedIn ? (
            <div className="user-section">
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
              <img
                src={profile?.avatar_url || "https://i.pravatar.cc/40"}
                alt="User avatar"
                className="user-avatar"
              />
            </div>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};
