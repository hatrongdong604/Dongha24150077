import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import CharacterList from "./pages/CharacterList";
import CartPage from "./pages/Cart";
import MainPage from "./pages/MainPages";
import LoginPages from "./pages/LoginPages";
import { CartProvider } from "./contexts/CartContext";

export default function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="buon-hang" element={<CharacterList />} />
            <Route path="cart" element={<CartPage />} />
            <Route
              path="login"
              element={<LoginPages onLoginSuccess={() => {}} />}
            />
          </Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}
