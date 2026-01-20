import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const addHandler = () => {
    addToCart(item);
    navigate("/summary");
  };

  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>₹{item.price.toFixed(2)}</p>
      <button onClick={addHandler}>Add Item</button>
    </div>
  );
};

export default ProductCard;
