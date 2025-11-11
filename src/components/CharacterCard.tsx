// src/components/CharacterCard.tsx
import React from "react";

interface Props {
  id: number;
  title: string;
  price: number;
  image?: string;
  description?: string;
  onOpen: () => void;
}

export const CharacterCard: React.FC<Props> = ({
  id,
  title,
  price,
  image,
  description,
  onOpen,
}) => {
  return (
    <div
      className="char-card"
      style={{
        cursor: "pointer",
        borderRadius: 12,
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.15s, box-shadow 0.15s",
      }}
      onClick={onOpen} // click toàn bộ card cũng mở modal
    >
      {/* Hình nhân vật */}
      <div
        style={{
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
          overflow: "hidden",
        }}
      >
        {image && (
          <img
            src={image}
            alt={title}
            style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
          />
        )}
      </div>

      {/* Thông tin */}
      <div style={{ padding: 12 }}>
        <h4 style={{ margin: "6px 0", color: "white" }}>{title}</h4>
        {description && (
          <p
            style={{
              fontSize: 12,
              color: "#ccc",
              marginBottom: 8,
              height: 36,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </p>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong style={{ color: "#f0c040" }}>
            {price.toLocaleString()} VND
          </strong>
          <button
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "none",
              background: "#f0c040",
              cursor: "pointer",
              fontWeight: 600,
            }}
            onClick={(e) => {
              e.stopPropagation(); // tránh click trùng với div cha
              onOpen();
            }}
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
