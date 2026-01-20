import React, { useState } from "react";
import "./Gift.css";

import india from "../assets/india.webp";
import starbucksCoffee from "../assets/starbucks_coffee.webp";
import warm from "../assets/warm.webp";
import thankyou from "../assets/thankyou.webp";
import congrats from "../assets/congrats.webp";
import appreciation from "../assets/appreciation.webp";
import festive1 from "../assets/festive1.webp";
import festive2 from "../assets/festive2.webp";
import festive3 from "../assets/festive3.webp";

function Gift() {
  const [activeCategory, setActiveCategory] = useState("Anytime");

  const categories = ["Anytime", "Congratulations", "ThankYou", "FestiveSpecials"];

  const menu = {
    Anytime: [
      { title: "India Exclusive", desc: "Bring in the festive season and make each celebration memorable.", img: india },
      { title: "Starbucks Coffee", desc: "Starbucks is best when shared. Treat your pals.", img: starbucksCoffee },
      { title: "U Keep Me Warm", desc: "Gift your loved ones this Starbucks Gift Card.", img: warm },
    ],

    Congratulations: [
      { title: "Congrats", desc: "Celebrate every special moment.", img: congrats },
    ],

    ThankYou: [
      { title: "More Than Words", desc: "Perfect way to say thanks.", img: thankyou },
      { title: "A Sip of Appreciation", desc: "Brewed with gratitude.", img: appreciation },
    ],

    FestiveSpecials: [
      { title: "Wishes for Deepavali", desc: "Best wishes for Diwali.", img: festive1 },
      { title: "Diwali Made Special", desc: "A gift of joy and warmth.", img: festive1 },
      { title: "Shubho Durga Puja", desc: "Celebrate joy with love.", img: festive3 },
      { title: "Happy Dussehra", desc: "Gift festive cheer.", img: festive2 },
      { title: "Brewed for the Festivities", desc: "Elegant Diwali gifting.", img: festive1 },
    ],
  };

  // ✅ FIX: Add Item button now works
  const handleAddItem = (item) => {
    console.log("Item added:", item.title);
    alert(item.title + " added!");
  };

  return (
    <div className="gift-page">
      <h1>Starbucks e-Gift Cards</h1>

      {/* Category Tabs */}
      <div className="gift-tabs">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeCategory === cat ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat.replace(/([A-Z])/g, " $1")}
          </button>
        ))}
      </div>

      {/* Gift Cards */}
      <div className="gift-items">
        {menu[activeCategory].map((item, index) => (
          <div className="gift-card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            {/* FIXED BUTTON */}
            <button onClick={() => handleAddItem(item)}>
              Add Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gift;
