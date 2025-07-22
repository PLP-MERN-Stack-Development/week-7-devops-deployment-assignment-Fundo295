import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-pink-600 font-bold">${product.price}</p>
      <Link to={`/product/${product._id}`} className="text-primary mt-2 block">
        View Details →
      </Link>
    </div>
  );
}
