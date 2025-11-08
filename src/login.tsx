import { useEffect, useState } from "react";
import introImage from "./assets/image/intro.jpg"; // <-- đường dẫn đúng theo tree của bạn
import Login from "./login"; // hoặc "./Login" nếu file đặt tên là Login.tsx (phải chính xác)

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showIntro ? (
        <div className="intro-container">
          <img src={introImage} alt="intro" className="intro-bg" />

          {/* Logo hiện dần giống Genshin */}
          <div className="logo fade-in">YOUR LOGO</div>

          {/* Hiệu ứng ánh sáng chạy ngang giống website Genshin */}
          <div className="light-effect"></div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
}
