import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/shop", label: "Shop" },
    { path: "/cart", label: "Cart" },
    { path: "/profile", label: "Profile" },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          FashionHub
        </Link>
        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-indigo-600 ${
                    isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
