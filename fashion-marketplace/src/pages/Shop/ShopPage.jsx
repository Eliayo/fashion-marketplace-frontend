import React, { useState } from "react";
import { Link } from "react-router-dom";

// Dummy product data (replace with API later)
const allProducts = [
  {
    id: 1,
    name: "Red Dress",
    price: 49.99,
    category: "Women",
    vendor: "Fashionista",
    image: "https://via.placeholder.com/250x300?text=Red+Dress",
  },
  {
    id: 2,
    name: "Leather Jacket",
    price: 89.99,
    category: "Men",
    vendor: "Urban Wear",
    image: "https://via.placeholder.com/250x300?text=Leather+Jacket",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 59.99,
    category: "Men",
    vendor: "Trendy Hub",
    image: "https://via.placeholder.com/250x300?text=Sneakers",
  },
  {
    id: 4,
    name: "Handbag",
    price: 39.99,
    category: "Accessories",
    vendor: "Fashionista",
    image: "https://via.placeholder.com/250x300?text=Handbag",
  },
  {
    id: 5,
    name: "Summer Top",
    price: 29.99,
    category: "Women",
    vendor: "Urban Wear",
    image: "https://via.placeholder.com/250x300?text=Summer+Top",
  },
];

const categories = ["All", "Women", "Men", "Accessories"];
const vendors = ["All", "Fashionista", "Urban Wear", "Trendy Hub"];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedVendor, setSelectedVendor] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");

  // Filtering
  const filteredProducts = allProducts
    .filter((p) =>
      selectedCategory === "All" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      selectedVendor === "All" ? true : p.vendor === selectedVendor
    )
    .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()));

  // Sorting
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    return 0;
  });

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-1/4 bg-white shadow-md rounded-lg p-4 space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Category</h3>
          {categories.map((cat) => (
            <div key={cat} className="flex items-center mb-1">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
                className="mr-2"
              />
              <label>{cat}</label>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Vendor</h3>
          {vendors.map((vendor) => (
            <div key={vendor} className="flex items-center mb-1">
              <input
                type="radio"
                name="vendor"
                value={vendor}
                checked={selectedVendor === vendor}
                onChange={() => setSelectedVendor(vendor)}
                className="mr-2"
              />
              <label>{vendor}</label>
            </div>
          ))}
        </div>

        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <input
            type="range"
            min="0"
            max="100"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <p className="text-sm text-gray-600">Up to ${priceRange[1]}</p>
        </div>
      </aside>

      {/* Products Section */}
      <main className="flex-1">
        {/* Search + Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3"
          />

          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2"
          >
            <option value="default">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
          </select>
        </div>

        {/* Products Grid */}
        {sortedProducts.length === 0 ? (
          <p className="text-gray-500">No products found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-pink-600 font-bold">${product.price}</p>
                  <p className="text-sm text-gray-500">
                    Vendor: {product.vendor}
                  </p>
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
        )}
      </main>
    </div>
  );
};

export default ShopPage;
