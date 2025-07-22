// src/pages/ProductDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded mb-4" />
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <p className="text-lg text-gray-700 mt-2">{product.description}</p>
      <p className="text-xl text-pink-600 font-semibold mt-4">${product.price}</p>
      <button className="bg-pink-500 text-white px-4 py-2 rounded mt-6 hover:bg-pink-600">
        Add to Cart
      </button>
    </div>
  );
}
