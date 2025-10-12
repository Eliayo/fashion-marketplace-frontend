import { useCart } from "../../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <p className="text-center text-gray-600">Your cart is empty.</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(item.id, Number(e.target.value))
                }
                className="w-16 border rounded px-2 py-1"
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center border-t pt-4">
        <p className="text-lg font-bold">Total: ${total.toFixed(2)}</p>
        <div className="space-x-2">
          <button
            onClick={clearCart}
            className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          >
            Clear Cart
          </button>
          <button className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
