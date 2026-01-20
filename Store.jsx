// src/components/Store.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Store.css";
import Holiday from "../assets/Holiday.webp";
import CoffeeBox from "../assets/CoffeeBox.webp";
import Iced from "../assets/Iced.webp";
import Saffron from "../assets/Saffron.webp";

const products = [
  {
    id: 1,
    name: "Jaggery Cloud Latte",
    desc: "Bold, coffee-forward latte topped with a cloud.",
    price: 378,
    image: Holiday,
    stock: true,
  },
  {
    id: 2,
    name: "Chocolate Foam Cold Brew",
    desc: "Cold brew topped with creamy chocolate foam.",
    price: 420,
    image: CoffeeBox,
    stock: true,
  },
  {
    id: 3,
    name: "Saffron Latte",
    desc: "Signature saffron blonde roast.",
    price: 414.75,
    image: Saffron,
    stock: false,
  },
  {
    id: 4,
    name: "Iced Saffron Latte",
    desc: "Signature Iced saffron blend.",
    price: 456.75,
    image: Iced,
    stock: false,
  },
];

export default function Store() {
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const addItem = (id) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

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
    const product = products.find((p) => p.id === Number(id));
    return sum + product.price * qty;
  }, 0);

  const handleViewCart = () => {
    window.scrollTo(0, 0);
    navigate("/order-summary", { state: { cart, products, totalAmount } });
  };

  return (
    <div>
      <h2 className="heading">Our Drinks</h2>

      <div className="product-container">
        {products.map((p) => (
          <div key={p.id} className={`product-card ${!p.stock ? "out-stock" : ""}`}>
            <img src={p.image} alt={p.name} className="product-img" />
            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <h4>₹{p.price.toFixed(2)}</h4>
            </div>

            {p.stock ? (
              <div className="qty-box">
                <button onClick={() => removeItem(p.id)}>−</button>
                <span>{cart[p.id] || 0}</span>
                <button onClick={() => addItem(p.id)}>+</button>
              </div>
            ) : (
              <button className="oos-btn" disabled>Out of Stock</button>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Sticky Cart Bar */}
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

      {/* Footer Section */}
      <footer className="store-footer">
        <h3>Contact Information</h3>
        <p><strong>Store Name:</strong> Coffee House Premium</p>
        <p><strong>Address:</strong> MG Road, Churchgate, Mumbai, India</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Email:</strong> support@coffeehouse.com</p>

        <div className="social-links">
          <a href="#" target="_blank">Facebook</a> |
          <a href="#" target="_blank"> Twitter</a> |
          <a href="#" target="_blank"> Instagram</a>
        </div>
        <p className="copy">&copy; {new Date().getFullYear()} Coffee House. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
