import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";

const products = [
  { id: 1, name: "Cold Coffee", price: 372.75, image: "/cold.jpg" },
  { id: 2, name: "Java Chip Frappuccino", price: 411.75, image: "/java.jpg" }
];

export default function Products() {
  return (
    <div className="products">
      {products.map((p) => (
        <ProductCard key={p.id} item={p} />
      ))}
    </div>
  );
}
