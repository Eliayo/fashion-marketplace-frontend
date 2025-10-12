import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow-sm p-4 hover:shadow-lg transition">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
      </Link>
      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.category}</p>
      <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 block text-center bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
