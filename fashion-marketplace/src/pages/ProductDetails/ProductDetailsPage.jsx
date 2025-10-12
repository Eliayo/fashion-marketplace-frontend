import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// For now, mock products same as ShopPage
const sampleProducts = [
  {
    id: 1,
    name: "Classic Shirt",
    category: "Men",
    price: 30,
    image: "/images/shirt.jpg",
    description: "Comfortable cotton shirt.",
  },
  {
    id: 2,
    name: "Summer Dress",
    category: "Women",
    price: 45,
    image: "/images/dress.jpg",
    description: "Light and breezy summer dress.",
  },
  {
    id: 3,
    name: "Sneakers",
    category: "Unisex",
    price: 60,
    image: "/images/sneakers.jpg",
    description: "Stylish and durable sneakers.",
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = sampleProducts.find((p) => p.id === Number(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-96 object-cover rounded-lg"
      />
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-indigo-600 text-xl font-semibold">
          ${product.price}
        </p>
        <button
          onClick={() => addToCart(product)}
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
