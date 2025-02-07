import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";


const Layout: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      {/* <Sidebar /> */}

      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Nội dung chính */}
        <main className="flex-1 p-6 overflow-auto bg-gray-100"><Outlet />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
