import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Order.css";

import espresso from "../assets/Espresso.webp";
import blend from "../assets/Blend.webp";
import tumbler from "../assets/Tumbler.webp";
import mug from "../assets/Mug.webp";
import croissant from "../assets/Croissant.webp";
import mozzarella from "../assets/Mozzarella.webp";
import blueberry from "../assets/Blueberry.webp";
import frappuccino from "../assets/Frappuccino.webp";
import caramel from "../assets/Caramel.webp";
import cold from "../assets/Cold.webp";

function Order() {
  const [activeCategory, setActiveCategory] = useState("Drinks");
  const [cart, setCart] = useState({});
  const navigate = useNavigate();

  const categories = ["Drinks", "Food", "Merchandise", "Coffee At Home"];

  const menu = {
    Drinks: [
      { id: 1, name: "Caffè Americano", price: 283.5, img: espresso, desc: "Rich espresso with hot water." },
      { id: 2, name: "Cold Coffee", price: 372.75, img: cold, desc: "Starbucks signature coffee." },
      { id: 3, name: "Java Chip Frappuccino", price: 411.75, img: frappuccino, desc: "Mocha-flavored sauce blended with milk." },
      { id: 4, name: "Caramel Macchiato", price: 410.0, img: caramel, desc: "Freshly steamed milk with vanilla syrup." },
    ],
    Food: [
      { id: 5, name: "Butter Croissant", price: 185.0, img: croissant, desc: "Flaky, buttery croissant baked to perfection." },
      { id: 6, name: "Tomato Mozzarella Sandwich", price: 299.0, img: mozzarella, desc: "Fresh mozzarella, tomatoes, basil pesto." },
      { id: 7, name: "Blueberry Muffin", price: 210.0, img: blueberry, desc: "Moist muffin baked with real blueberries." },
    ],
    Merchandise: [
      { id: 8, name: "Starbucks Mug", price: 1200.0, img: mug, desc: "Classic ceramic Starbucks mug." },
      { id: 9, name: "Starbucks Tumbler", price: 1499.0, img: tumbler, desc: "Keep your drinks hot or cold." },
    ],
    "Coffee At Home": [
      { id: 10, name: "Starbucks House Blend", price: 750.0, img: blend, desc: "Balanced medium roast with cocoa notes." },
      { id: 11, name: "Starbucks Espresso Roast", price: 850.0, img: espresso, desc: "Dark roast with caramelized flavor." },
    ],
  };

  // 👉 Add item & move to summary page
  const handleAddItem = (item) => {
    const updatedCart = { ...cart };

    if (updatedCart[item.id]) {
      updatedCart[item.id] += 1;
    } else {
      updatedCart[item.id] = 1;
    }

    setCart(updatedCart);

    const allProducts = [].concat(...Object.values(menu));

    navigate("/order-summary", {
      state: {
        cart: updatedCart,
        products: allProducts,
      }
    });
  };

  return (
    <div className="order-page">
      <div className="order-header">
        <h1>Order Your Favorite Starbucks</h1>
        <p>Browse our menu and enjoy handcrafted beverages and delicious food items.</p>
      </div>

      <div className="order-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="order-items">
        {menu[activeCategory].map((item) => (
          <div key={item.id} className="order-card">
            <img src={item.img} alt={item.name} />
            <div className="order-info">
              <h3>{item.name}</h3>
              <p>{item.desc}</p>
              <div className="order-bottom">
                <span className="price">₹{item.price.toFixed(2)}</span>
                <button onClick={() => handleAddItem(item)}>Add Item</button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Order;
