import React from "react";
import Navbar from "../components/Common/Navbar";
import Footer from "../components/Common/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
