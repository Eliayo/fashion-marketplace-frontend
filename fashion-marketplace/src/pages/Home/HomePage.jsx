import React from "react";
import { Link } from "react-router-dom";

// Dummy data for now (replace with API later)
const categories = [
  {
    id: 1,
    name: "Women",
    image:
      "https://img.freepik.com/free-photo/front-view-woman-wearing-hat_23-2149726075.jpg",
  },
  {
    id: 2,
    name: "Men",
    image:
      "https://img.freepik.com/free-photo/handsome-elegantly-dressed-african-american-man-posing-with-crossed-arms-near-mannequin-classic-menswear-store_613910-19031.jpg",
  },
  {
    id: 3,
    name: "Accessories",
    image:
      "https://img.freepik.com/free-photo/model-career-kit-still-life_23-2150218029.jpg",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Red Dress",
    price: 49.99,
    image:
      "https://img.kwcdn.com/product/fancy/23f6ff4e-b872-4d2e-b0e4-eb7aa4e98a46.jpg",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 89.99,
    image:
      "https://img.freepik.com/premium-photo/black-premium-luxury-stylish-leather-jacket-mockup-luxury-leather-jacket-mockup-stylish-leather_1114736-4263.jpg",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 59.99,
    image:
      "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg",
  },
  {
    id: 4,
    name: "Handbag",
    price: 39.99,
    image: "https://img.freepik.com/free-photo/pink-handbags_1203-7710.jpg",
  },
];

const topVendors = [
  {
    id: 1,
    name: "Fashionista",
    image: "https://via.placeholder.com/150?text=Vendor+1",
  },
  {
    id: 2,
    name: "Urban Wear",
    image: "https://via.placeholder.com/150?text=Vendor+2",
  },
  {
    id: 3,
    name: "Trendy Hub",
    image: "https://via.placeholder.com/150?text=Vendor+3",
  },
];

const HomePage = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-pink-500 to-purple-600 text-white py-20 rounded-2xl">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Shop the latest fashion trends from top vendors
          </p>
          <Link
            to="/shop"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              to={`/shop?category=${cat.name}`}
              key={cat.id}
              className="relative group rounded-lg overflow-hidden shadow-md"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition"
              />
              <div className="absolute inset-0 backdrop-contrast-50 flex items-center justify-center text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition">
                {cat.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-pink-600 font-bold">${product.price}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 inline-block bg-pink-600 text-white px-4 py-2 rounded text-sm hover:bg-pink-700"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Vendors */}
      <section className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Top Vendors</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {topVendors.map((vendor) => (
            <div key={vendor.id} className="text-center">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-24 h-24 rounded-full mx-auto mb-2 border-2 border-pink-500"
              />
              <p className="font-medium text-gray-700">{vendor.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-pink-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Stay in the Loop
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to get updates on new arrivals and special offers
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-1/3 border border-gray-300 rounded px-4 py-2"
            />
            <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
