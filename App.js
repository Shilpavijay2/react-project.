import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Gift from "./components/Gift";
import Order from "./components/Order";
import Pay from "./components/Pay";
import Store from "./components/Store";
import CorporateGifting from "./components/CorporateGifting";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Products from "./pages/Products";
import OrderSummary from "./components/OrderSummary";
import PaymentPage from "./components/PaymentPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/" element={<Products />} />
        <Route path="/order-summary" element={<OrderSummary />} />

        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/store" element={<Store />} />
        <Route path="/corporate-gifting" element={<CorporateGifting />} />
        <Route path="/login" element={<Login />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
