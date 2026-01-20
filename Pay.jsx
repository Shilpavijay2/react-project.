import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Pay.css";

export default function Pay() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart, products, totalAmount } = location.state || {};

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Paytm"); // default payment

  const handlePayment = () => {
    if (!name || !email || !phone) {
      alert("Please fill all details!");
      return;
    }

    if (paymentMethod === "Paytm") {
      // Open Paytm UPI link
      const paytmDeepLink =
        "paytm://upi/pay?pa=yourupiid@bank&pn=Starbucks%20Order&am=" +
        totalAmount;
      window.location.href = paytmDeepLink;

      // Fallback to website
      setTimeout(() => {
        window.open("https://paytm.com/payments", "_blank");
      }, 1200);

      alert(`Payment process started via Paytm! Total: ₹${totalAmount?.toFixed(2)}`);
    } else if (paymentMethod === "COD") {
      alert(`Order placed for Cash on Delivery! Total: ₹${totalAmount?.toFixed(2)}`);
    }

    navigate("/"); // redirect home after payment
  };

  return (
    <div className="pay-container">
      <h2>Payment</h2>

      {/* Order Summary */}
      <div className="summary">
        <h3>Order Summary</h3>
        {cart && Object.entries(cart).length > 0 ? (
          Object.entries(cart).map(([id, qty]) => {
            const product = products.find((p) => p.id === Number(id));
            return (
              <div className="summary-item" key={id}>
                {product.name} × {qty} = ₹{(product.price * qty).toFixed(2)}
              </div>
            );
          })
        ) : (
          <p>No items in cart</p>
        )}
        <h3 className="total">Total: ₹{totalAmount?.toFixed(2)}</h3>
      </div>

      {/* Customer Details */}
      <div className="customer-info">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      {/* Payment Method */}
      <div className="payment-method">
        <h3>Payment Method</h3>
        <label>
          <input
            type="radio"
            value="Paytm"
            checked={paymentMethod === "Paytm"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Paytm
        </label>
        <label>
          <input
            type="radio"
            value="COD"
            checked={paymentMethod === "COD"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>

      <button className="pay-btn" onClick={handlePayment}>
        {paymentMethod === "COD" ? "Place Order" : "Pay Now"}
      </button>
    </div>
  );
}
