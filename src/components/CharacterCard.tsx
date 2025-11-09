import React from "react";

interface Props {
  id: number;
  title: string;
  price: number;
  image?: string;
  onOpen: () => void;
}

export const CharacterCard: React.FC<Props> = ({
  id,
  title,
  price,
  image,
  onOpen,
}) => {
  return (
    <div
      className="char-card"
      onClick={onOpen}
      style={{
        cursor: "pointer",
        borderRadius: 12,
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "transform .15s, box-shadow .15s",
      }}
    >
      <div
        style={{
          height: 220,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "rgba(0,0,0,0.25)",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ maxHeight: "100%", width: "auto", objectFit: "contain" }}
        />
      </div>
      <div style={{ padding: 12 }}>
        <h4 style={{ margin: "6px 0", color: "white" }}>{title}</h4>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#f0c040",
          }}
        >
          <strong>{price.toLocaleString()} VND</strong>
          <button
            style={{
              padding: "6px 10px",
              borderRadius: 6,
              border: "none",
              background: "#f0c040",
              cursor: "pointer",
            }}
          >
            Chi tiết
          </button>
        </div>
      </div>
    </div>
  );
};
