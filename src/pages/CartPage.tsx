// src/pages/CartPage.tsx
import React from "react";
import { useCart } from "../contexts/CartContext";

const CartPage: React.FC = () => {
  const { items, remove, clear, total } = useCart();

  if (items.length === 0) return <p>Giỏ hàng trống 😢</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Giỏ hàng</h2>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "10px",
            alignItems: "center",
          }}
        >
          {item.image && (
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
          )}
          <div>
            <p>{item.title}</p>
            <p>
              ${item.price} x {item.qty} = {item.price * item.qty}
            </p>
            <button onClick={() => remove(item.id)}>Xóa</button>
          </div>
        </div>
      ))}
      <hr />
      <h3>Tổng: ${total}</h3>
      <button onClick={clear}>Xóa tất cả</button>
    </div>
  );
};

export default CartPage;
