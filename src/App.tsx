import { useEffect, useState } from "react";
import introImage from "./intro.jpg";
import Login from "./Login"; // trang đăng nhập của bạn

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Sau 3.5s tự chuyển sang trang Login
    const timer = setTimeout(() => setShowIntro(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-black">
      {showIntro ? (
        <div className="intro w-full h-full flex items-center justify-center fade">
          <img
            src={introImage}
            alt="intro"
            className="w-full h-full object-cover zoom"
          />
        </div>
      ) : (
        <Login /> // ✅ Sau intro → chuyển sang trang đăng nhập
      )}

      <style>{`
        /* Nhẹ hơn – giữ intro đẹp */
        .fade {
          animation: fadeOut 3.5s forwards;
        }

        .zoom {
          animation: zoomIn 3.5s ease-out forwards;
        }

        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 1; }  /* ✅ Giữ nguyên độ sáng, KHÔNG mờ dần */
        }

        @keyframes zoomIn {
          0% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
c;
