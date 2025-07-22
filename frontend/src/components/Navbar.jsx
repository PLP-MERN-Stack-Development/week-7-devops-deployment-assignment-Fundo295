
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-pink-500 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Shopeasy</Link>
      <div className="space-x-4">
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
