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
      onClick={onOpen}
      style={{
        cursor: "pointer",
        borderRadius: 12,
        padding: 12,
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform 0.15s, box-shadow 0.15s",
        display: "flex",
        flexDirection: "column",
        gap: 8,
      }}
    >
      {image && (
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: 180,
            objectFit: "cover",
            borderRadius: 8,
          }}
        />
      )}

      <h3
        style={{
          fontSize: "1.1rem",
          fontWeight: 600,
          color: "#f0c040",
          margin: 0,
          overflowWrap: "break-word",
        }}
      >
        {title}
      </h3>

      {description && (
        <p
          style={{
            fontSize: "0.85rem",
            color: "#fff",
            margin: 0,
            overflowWrap: "break-word",
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
            background: "#f0c040",
            border: "1px solid #f0c040",
            fontWeight: 600,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >
          Thêm
        </button>
      </div>
    </div>
  );
};
