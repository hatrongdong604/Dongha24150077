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
import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPages";
import LoginPages from "./pages/LoginPages";
import { CartProvider } from "./contexts/CartContext";

// Import ProtectedRoute
import ProtectedRoute from "./components/ProtectedRoute"; // hoặc ./routes/ProtectedRoute nếu bạn đặt trong routes/

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    !!localStorage.getItem("user")
  );

  const handleLoginSuccess = () => {
    localStorage.setItem("user", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Layout chung */}
          <Route
            path="/"
            element={<Layout onLogout={handleLogout} isLoggedIn={isLoggedIn} />}
          >
            {/* Trang chính */}
            <Route index element={<MainPage />} />

            {/* Buôn nhân vật (Protected) */}
            <Route
              path="buon-hang"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <CharacterList />
                </ProtectedRoute>
              }
            />

            {/* Giỏ hàng (Protected) */}
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
