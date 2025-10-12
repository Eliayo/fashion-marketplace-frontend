import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 mt-8">
      <div className="container mx-auto text-center text-sm">
        © {new Date().getFullYear()} FashionHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
