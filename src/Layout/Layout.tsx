// src/Layout/Layout.tsx
import React from "react";
import { Navbar } from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../assets/css/Layout.css";

// import video trực tiếp
import heroVideo from "../assets/videos/hero.mp4";

const Layout: React.FC = () => {
  return (
    <div className="layout">
      <Navbar />

      {/* Hero Section với video nền trực tiếp */}
      <section className="hero-section">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hero-video"
          src={heroVideo}
        />
        <div className="hero-overlay">
          <h1>Welcome to Đạo quán Hoyoverse</h1>
          <p>Khám phá thế giới tuyệt vời như Genshin Impact</p>
        </div>
      </section>

      {/* Main content */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer">&copy; 2025 Đạo quán Hoyoverse</footer>
    </div>
  );
};

export default Layout;
