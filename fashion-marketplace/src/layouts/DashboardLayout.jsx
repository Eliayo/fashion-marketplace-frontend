import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar goes here */}
      <aside className="w-64 bg-white shadow-md">Sidebar</aside>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
