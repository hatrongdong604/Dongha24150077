import React from "react";
import Layout from "../Layout/Layout";

const MainPage: React.FC = () => {
  return (
    <Layout heroVideoUrl="URL_video_Hero.mp4">
      {/* Nếu muốn thêm nội dung chính bên dưới Hero, thêm ở đây */}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Chào mừng bạn đến Đạo quán Hoyoverse</h2>
        <p>Khám phá thế giới tuyệt vời giống Genshin Impact!</p>
      </div>
    </Layout>
  );
};

export default MainPage;
