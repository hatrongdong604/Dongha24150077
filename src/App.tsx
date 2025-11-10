import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./Layout/Layout";
import CharacterList from "./pages/CharacterList";
import CartPage from "./pages/Cart";
import MainPage from "./pages/MainPages";
import LoginPages from "./pages/LoginPages";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  // State để quản lý login
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("user")
  );

  // Hàm gọi khi login thành công
  const handleLoginSuccess = () => {
    localStorage.setItem("user", "true"); // hoặc thông tin user
    setIsLoggedIn(true);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Layout chung cho tất cả các route */}
          <Route path="/" element={<Layout />}>
            {/* Trang chính */}
            <Route index element={<MainPage />} />

            {/* Danh sách nhân vật */}
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
