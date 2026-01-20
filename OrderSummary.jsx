// src/components/OrderSummary.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderSummary.css";

function OrderSummary() {
  const location = useLocation();
  const navigate = useNavigate();

  const cart = location.state?.cart || {};
  const products = location.state?.products || [];

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const product = products.find(p => p.id === Number(id));
    return { ...product, quantity: qty };
  });

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="order-summary-page">
      <h2>Order Summary</h2>

      {cartItems.length === 0 && <p>Your cart is empty</p>}

      {cartItems.map(item => (
        <div key={item.id} className="summary-row">
          <img src={item.img} alt={item.name} />
          <div className="summary-info">
            <h3>{item.name}</h3>
            <p>Price: ₹{item.price.toFixed(2)}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        </div>
      ))}

      <h2>Total: ₹{total.toFixed(2)}</h2>

      <button onClick={() => navigate("/pay", { state: { cart, products, total } })}>
        Proceed To Pay
      </button>
    </div>
  );
}

export default OrderSummary;
