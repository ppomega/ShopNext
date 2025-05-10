// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
export default function Navbar({ isLoggedIn, user, setDarkMode, darkMode }) {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname != "/login")
    return (
      <nav className="w-9/12 h-1/2 mx-46  absolute top-0 ">
        <div className="max-w-7xl mx-auto  z-20 px-4 bg-black dark:text-black dark:bg-white font-inter backdrop-blur-2xl py-3 sticky top-3 rounded-lg flex justify-between items-center">
          <div className="text-4xl font-bold font-rag  text-red-400">
            ShopNext
          </div>

          <ul className="flex justify-around w-full text-gray-700 dark:text-black">
            <li
              onClick={() => {
                navigate("/");
              }}
              className="hover:text-red-400 dark:text-black text-white px-6 py-1  h-full hover:border-red hover:border-b-2  cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                navigate("/products");
              }}
              className="hover:text-red-400 px-6 dark:text-black py-1 text-white hover:border-red hover:border-b-2 cursor-pointer"
            >
              Products
            </li>
            <li
              onClick={() => {
                navigate("/about");
              }}
              className="hover:text-red-400 dark:text-black px-6 py-1 text-white hover:border-red hover:border-b-2 cursor-pointer"
            >
              About
            </li>
            <li
              onClick={() => {
                navigate("/cart");
              }}
              className="hover:text-red-400 px-6 py-1 dark:text-black text-white hover:border-red hover:border-b-2 cursor-pointer"
            >
              Cart
            </li>
          </ul>
          {isLoggedIn ? (
            <div className="px-4 py-2 w-2xs dark:hover:bg-white/0 dark:text-red-500 dark:bg-white bg-red-700 text-white rounded hover:bg-red-600 transition-colors">
              Hello {user.name.split(" ")[0]}
            </div>
          ) : (
            <button
              onClick={() => {
                navigate("/login", { state: { prev: location.pathname } });
              }}
              className="px-4 py-2 text-black dark:hover:text-white dark:bg-white dark:shadow-lg dark:shadow-red-300 dark:text-red-400 bg-red-500 rounded hover:bg-red-600 transition-colors"
            >
              Login
            </button>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-lg bg-white  text-gray-800 dark:text-gray-200 hover:bg-red-400 p-1 ml-4"
          >
            {darkMode ? (
              <img src="night-mode.png" className="h-6 w-7"></img>
            ) : (
              <img src="light-mode.png" className="h-6 w-7"></img>
            )}
          </button>
        </div>
      </nav>
    );
  else return <></>;
}
