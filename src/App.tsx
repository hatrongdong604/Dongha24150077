// src/App.tsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import CharacterList from "./pages/CharacterList";
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPages";
import LoginPages from "./pages/LoginPages";
import { CartProvider } from "./contexts/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  // Quản lý trạng thái login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("user")
  );

  // Hàm gọi khi login thành công
  const handleLoginSuccess = () => {
    localStorage.setItem("user", "true"); // lưu thông tin user
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
          <Route
            path="/"
            element={<Layout onLogout={handleLogout} isLoggedIn={isLoggedIn} />}
          >
            {/* Trang chính */}
            <Route index element={<MainPage />} />

            {/* Buôn nhân vật */}
            <Route
              path="buon-hang"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CharacterList />
                </ProtectedRoute>
              }
            />

            {/* Giỏ hàng */}
            <Route
              path="cart"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CartPage />
                </ProtectedRoute>
              }
            />

            {/* Trang login */}
            <Route
              path="login"
              element={<LoginPages onLoginSuccess={handleLoginSuccess} />}
            />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
