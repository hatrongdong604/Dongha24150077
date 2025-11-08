import React from "react";
import "../assets/css/Layout.css";

interface LayoutProps {
  children?: React.ReactNode;
  heroVideoUrl?: string; // URL video nền cho Hero
}

const Layout: React.FC<LayoutProps> = ({ children, heroVideoUrl }) => {
  return (
    <div className="layout">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="https://i.pinimg.com/736x/b6/13/f9/b613f96d539eb174ffbc1fdb130be012.jpg"
            alt="Logo"
            className="logo"
          />
          <span className="logo-text">Đạo quán Hoyoverse</span>
        </div>
        <ul className="menu">
          <li>Home</li>
          <li>Characters</li>
          <li>Download</li>
          <li>News</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        {heroVideoUrl && (
          <video
            autoPlay
            loop
            muted
            className="hero-video"
            src={heroVideoUrl}
          ></video>
        )}
        <div className="hero-overlay">
          <h1>Welcome to Đạo quán Hoyoverse</h1>
          <p>Khám phá thế giới tuyệt vời như Genshin Impact</p>
        </div>
      </section>

      {/* Main content */}
      {children && <main className="main-content">{children}</main>}

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 Đạo quán Hoyoverse. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
