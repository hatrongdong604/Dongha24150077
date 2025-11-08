import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import MainPage from "./pages/MainPages";
import LoginPage from "./pages/LoginPages";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Không truyền heroVideoUrl nữa */}
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="login"
            element={<LoginPage onLoginSuccess={() => {}} />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
