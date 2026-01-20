// src/components/Home.jsx
import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import "./Home.css";

// Images
import javaChip from "../assets/100501.webp";
import coffeeImg from "../assets/ICW_Live_Event_Day5_1_decd6c1b6f.jpg";

function Home() {
  useEffect(() => {
    document.title = "Home | Starbucks Clone";   // Yeh title change karega
  }, []);
  const navigate = useNavigate();

  const handleAddToCart = () => {
    // Product details (same as Order.jsx style)
    const product = {
      id: 101,
      name: "Java Chip Frappuccino",
      price: 411,
      image: javaChip,
      desc: "Mocha-flavored sauce blended with milk."
    };

    // Navigate to order summary page with item
    navigate("/order-summary", {
      state: {
        cart: { [product.id]: 1 },   // quantity = 1
        products: [product]          // send product list same as Order.jsx
      }
    });
  };

  const handleViewCart = () => {
    navigate("/order-summary");
  };

  return (
    <div className="home">

      {/* ----------- Handcrafted Curations Section ----------- */}
      <section className="curations">
        <h2>Handcrafted Curations</h2>
        <div className="curation-items">
          {[
            { name: "Bestseller", img: "https://www.starbucks.in/assets/icon/Bestseller.webp" },
            { name: "Drinks", img: "https://www.starbucks.in/assets/icon/Drinks.webp" },
            { name: "Food", img: "https://www.starbucks.in/assets/icon/Food.webp" },
            { name: "Merchandise", img: "https://www.starbucks.in/assets/icon/Merchandise.webp" },
            { name: "Coffee At Home", img: "https://www.starbucks.in/assets/icon/CoffeeAtHome.webp" },
            { name: "Ready to Eat", img: "https://www.starbucks.in/assets/icon/ReadyToEat.webp" },
          ].map((item) => (
            <div className="curation-card" key={item.name}>
              <img src={item.img} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ----------- Barista Recommends Section ----------- */}
      <section className="barista">
        <h3>Barista Recommends</h3>

        <div className="recommend-card">
          <img src={javaChip} alt="Java Chip" className="recommend-img" />

          <div className="info">
            <h4>Java Chip Frappuccino</h4>
            <p className="price">₹ 411.00</p>

            <button className="add-btn" onClick={handleAddToCart}>
              Add Item
            </button>

            
          </div>
        </div>
      </section>

      {/* ----------- Coffee Science Section ----------- */}
      <section className="coffee">
        <img src={coffeeImg} alt="Coffee" className="coffee-img" />

        <div className="coffee-text">
          <h3>Art & Science Of Coffee Brewing</h3>
          <p>Master the perfect brew with Starbucks! Learn the art and science of coffee brewing.</p>
          <button className="learn-btn">Learn More</button>
        </div>
      </section>
    </div>
  );
}

export default Home;
