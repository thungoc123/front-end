import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-gray-700 pb-6 mb-6">
          <h2 className="text-white text-lg font-semibold mb-4 lg:mb-0">
            Subscribe to our newsletter
          </h2>
          <div className="flex items-center w-full lg:w-auto">
            <input
              type="email"
              placeholder="Input your email"
              className="w-full lg:w-64 px-4 py-2 rounded-l-md bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-6 py-2 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-sm mb-6">
          <div className="flex items-center space-x-6 mb-4 lg:mb-0">
            {/* <img
              src="/logo.png"
              alt="Logo"
              className="w-8 h-8"
            /> */}
            <span className="text-white font-bold text-lg">GlowUp</span>
          </div>
          <nav className="flex space-x-6 text-gray-400">
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">About us</a>
            <a href="#" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Help Center</a>
            <a href="#" className="hover:text-white">Contact us</a>
            <a href="#" className="hover:text-white">FAQs</a>
            <a href="#" className="hover:text-white">Careers</a>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4 mb-4 lg:mb-0">
            <select
              className="bg-gray-800 text-gray-400 px-3 py-1 rounded-md border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              <option>English</option>
              <option>Vietnamese</option>
              <option>French</option>
            </select>
          </div>
          <p>© 2024 Brand, Inc. · Privacy · Terms · Sitemap</p>
          <div className="flex space-x-4 text-gray-500">
            <a href="#" className="hover:text-white">{/* Twitter Icon */}</a>
            <a href="#" className="hover:text-white">{/* Facebook Icon */}</a>
            <a href="#" className="hover:text-white">{/* LinkedIn Icon */}</a>
            <a href="#" className="hover:text-white">{/* YouTube Icon */}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
