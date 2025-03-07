import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold text-blue-500">CodePlay</h1>
      <div>
        <button className="mr-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md">
          <Link to="/login">Login</Link>
        </button>
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-md">
          <Link to="/register"> Register</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
