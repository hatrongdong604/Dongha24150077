// src/App.tsx
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./Layout/Layout";
import CharacterList from "./pages/CharacterList";
import CartPage from "./pages/CartPage"; // Đảm bảo đúng tên file
import MainPage from "./pages/MainPages";
import LoginPages from "./pages/LoginPages";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  // Quản lý trạng thái login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("user")
  );

  // Hàm gọi khi login thành công
  const handleLoginSuccess = () => {
    localStorage.setItem("user", "true"); // Hoặc lưu thông tin user
    setIsLoggedIn(true);
  };

  // Hàm logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Layout chung cho tất cả các route */}
          <Route path="/" element={<Layout onLogout={handleLogout} isLoggedIn={isLoggedIn} />}>
            {/* Trang chính */}
            <Route index element={<MainPage />} />

            {/* Buôn nhân vật */}
            <Route path="buon-hang" element={<CharacterList />} />

            {/* Giỏ hàng */}
            <Route path="cart" element={<CartPage />} />

            {/* Trang login */}
            <Route
              path="login"
              element={
                isLoggedIn ? (
                  <Navigate to="/" replace />
                ) : (
                  <LoginPages onLoginSuccess={handleLoginSuccess} />
                )
              }
            />

            {/* Redirect các đường dẫn không hợp lệ về trang chính */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
