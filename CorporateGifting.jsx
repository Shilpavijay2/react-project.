// src/components/CorporateGifting.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CorporateGifting.css";

import Brew from "../assets/Brew.webp";
import Jaggery from "../assets/Jaggery.webp";
import Hamper from "../assets/Hamper.webp";
import Luxury from "../assets/Luxury.webp";

const gifts = [
  {
    id: 1,
    name: "Coffee Hamper",
    desc: "Assorted coffees and snacks for corporate gifting.",
    price: 1200,
    image: Hamper,
    stock: true,
  },
  {
    id: 2,
    name: "Tea & Coffee Box",
    desc: "Premium tea and coffee selection.",
    price: 950,
    image: Brew,
    stock: true,
  },
  {
    id: 3,
    name: "Luxury Gift Basket",
    desc: "Coffee, mugs, chocolates & more.",
    price: 2500,
    image: Jaggery,
    stock: false,
  },
  {
    id: 4,
    name: "Holiday Special Box",
    desc: "Festive treats & beverages.",
    price: 1800,
    image: Luxury,
    stock: true,
  },
];

export default function CorporateGifting() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const addItem = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeItem = (id) => {
    setCart((prev) => {
      if (!prev[id]) return prev;
      const updated = { ...prev, [id]: prev[id] - 1 };
      if (updated[id] <= 0) delete updated[id];
      return updated;
    });
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalAmount = Object.entries(cart).reduce((sum, [id, qty]) => {
    const gift = gifts.find((g) => g.id === Number(id));
    return sum + gift.price * qty;
  }, 0);

  const handleViewCart = () => {
    window.scrollTo(0, 0);
    navigate("/order-summary", { state: { cart, products: gifts, totalAmount } });
  };

  return (
    <div>
      <h2 className="cg-heading">Corporate Gifting</h2>

      <div className="cg-container">
        {gifts.map((gift) => (
          <div key={gift.id} className={`cg-card ${!gift.stock ? "out-stock" : ""}`}>
            <img src={gift.image} alt={gift.name} className="cg-img" />
            <div className="cg-info">
              <h3>{gift.name}</h3>
              <p>{gift.desc}</p>
              <h4>₹{gift.price.toFixed(2)}</h4>
            </div>

            {gift.stock ? (
              <div className="cg-qty-box">
                <button onClick={() => removeItem(gift.id)}>−</button>
                <span>{cart[gift.id] || 0}</span>
                <button onClick={() => addItem(gift.id)}>+</button>
              </div>
            ) : (
              <button className="cg-oos-btn" disabled>
                Out of Stock
              </button>
            )}
          </div>
        ))}
      </div>

       {/* Bottom Cart Bar */}
      <div className="cart-bar">
        <span>{totalItems} item(s)</span>
        <span>Total: ₹{totalAmount.toFixed(2)}</span>
        <button
          className="view-cart-btn"
          onClick={handleViewCart}
          disabled={totalItems === 0}
        >
          View Cart
        </button>
      </div>
    </div>
  );
}
