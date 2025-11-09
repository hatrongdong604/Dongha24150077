import React, { useEffect, useState } from "react";
import { productClient } from "../supabase/productClient";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating_rate: number;
  rating_count: number;
}

const ProductListPackage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Lấy dữ liệu từ Supabase
  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await productClient
        .from("product1")
        .select("*")
        .order("id", { ascending: true });

      if (error) console.error("Lỗi khi lấy dữ liệu sản phẩm:", error);
      else setProducts(data || []);
    };

    fetchProducts();
  }, []);

  // Lọc theo tên nhân vật
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        padding: "30px",
        backgroundImage: `url('https://uploadstatic-sea.mihoyo.com/contentweb/20210507/2021050710422362610.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "28px" }}>
        🌸 Danh sách nhân vật Genshin Impact 🌸
      </h2>

      {/* Thanh tìm kiếm */}
      <div style={{ textAlign: "center", marginBottom: "25px" }}>
        <input
          type="text"
          placeholder="🔍 Tìm nhân vật bạn yêu thích..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px 20px",
            width: "60%",
            borderRadius: "25px",
            border: "none",
            outline: "none",
            fontSize: "16px",
            backgroundColor: "rgba(255,255,255,0.8)",
            color: "#333",
          }}
        />
      </div>

      {/* Danh sách nhân vật */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredProducts.map((p) => (
          <div
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
            style={{
              background: "rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              borderRadius: "16px",
              padding: "15px",
              textAlign: "center",
              cursor: "pointer",
              transition: "transform 0.3s, background 0.3s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget.style.transform = "scale(1.05)"),
              (e.currentTarget.style.background = "rgba(255,255,255,0.25)")))
            onMouseLeave={(e) =>
              ((e.currentTarget.style.transform = "scale(1)"),
              (e.currentTarget.style.background = "rgba(255,255,255,0.15)"))}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{
                height: "180px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              }}
            />
            <h4 style={{ fontSize: "18px", fontWeight: 600 }}>{p.title}</h4>
            <p style={{ margin: "5px 0" }}>{p.price} Mora</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/cart?add=${p.id}`);
              }}
              style={{
                backgroundColor: "#FFD700",
                color: "#000",
                border: "none",
                borderRadius: "10px",
                padding: "8px 16px",
                cursor: "pointer",
                marginTop: "8px",
                transition: "0.3s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#ffcc00")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#FFD700")
              }
            >
              🛒 Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPackage;
