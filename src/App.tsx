import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPages";
import LoginPage from "./pages/LoginPages";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Trang chính */}
        <Route path="/" element={<MainPage />} />

        {/* Trang login */}
        <Route
          path="/login"
          element={
            <LoginPage
              introVideoUrl="URL_video_intro.mp4" // tùy chọn video intro
              onLoginSuccess={() => setLoggedIn(true)}
            />
          }
        />
      </Routes>
    </Router>
  );
}
