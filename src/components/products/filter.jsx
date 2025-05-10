import React, { useState } from "react";
import { motion, useAnimate } from "motion/react";

function Filter({ setFilter, darkMode }) {
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState(1500);
  const [scope, animate] = useAnimate();
  function handleCategoryChange(e) {
    const { id, checked } = e.target;
    if (checked) {
      categories.push(id);
    } else {
      const index = categories.indexOf(id);
      if (index > -1) {
        categories.splice(index, 1);
      }
    }
    setCategories(categories);

    setFilter({ categories: categories, price: price });
  }
  function handlePriceChange(e) {
    const value = e.target.value;
    setPrice(value);
    setFilter({ categories: categories, price: value });
  }
  return (
    <motion.div
      ref={scope}
      id="filter"
      initial={{ scale: 0, x: -470 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className="h-1/3 z-10 w-full bg-[url('/bg.jpg')] dark:bg-cover dark:bg-no-repeat dark:bg-[url('/bgdark.png')] bg-cover sticky top-28 rounded-md px-16 shadow-black flex bg-white shadow-lg p-4 "
    >
      <svg
        onClick={() => {
          animate(document.querySelector("#filter"), { x: -470 });
        }}
        fill={darkMode ? "#ffffff" : "#000000"}
        xmlns="http://www.w3.org/2000/svg"
        stroke={darkMode ? "#ffffff" : "#000000"}
        className="absolute top-0 left-0 m-4 cursor-pointer"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g data-name="Layer 2">
            {" "}
            <g data-name="arrowhead-left">
              {" "}
              <rect
                width="4"
                height="4"
                transform="rotate(90 12 12)"
                opacity="0"
              ></rect>{" "}
              <path d="M11.64 5.23a1 1 0 0 0-1.41.13l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63L7.29 12l4.48-5.37a1 1 0 0 0-.13-1.4z"></path>{" "}
              <path d="M14.29 12l4.48-5.37a1 1 0 0 0-1.54-1.28l-5 6a1 1 0 0 0 0 1.27l4.83 6a1 1 0 0 0 .78.37 1 1 0 0 0 .78-1.63z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>

      <div className="flex dark:text-white px-4">
        <h3>Category</h3>
        <ul className="flex flex-col ml-4">
          <li className="flex items-center">
            <input
              type="checkbox"
              id="electronics"
              onChange={handleCategoryChange}
            />
            <label htmlFor="electronics">Electronics</label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="kitchen"
              onChange={handleCategoryChange}
            />
            <label htmlFor="kitchen">Kitchen</label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="clothing"
              onChange={handleCategoryChange}
            />
            <label htmlFor="clothing">Clothing</label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="health"
              onChange={handleCategoryChange}
            />
            <label htmlFor="health">Health</label>
          </li>
          <li className="flex items-center">
            <input
              type="checkbox"
              id="appliances"
              onChange={handleCategoryChange}
            />
            <label htmlFor="appliances">Appliances</label>
          </li>
        </ul>
      </div>
      <div className="dark:text-black w-1/2 px-3 h-1/2 mx-5 shadow-2xl text-red-500 bg-white rounded-md">
        <h3>Price Range</h3>
        <input
          onChange={handlePriceChange}
          type="range"
          className="h-1 rounded-2xl"
          min="0"
          max="1500"
        />
      </div>
      <svg
        onClick={() => {
          animate(document.querySelector("#filter"), { x: 0 });
        }}
        fill={darkMode ? "#ffffff" : "#000000"}
        className="absolute top-0 left-[450px] m-4 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        stroke={darkMode ? "#ffffff" : "#000000"}
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g data-name="Layer 2">
            {" "}
            <g data-name="arrowhead-right">
              {" "}
              <rect
                width="24"
                height="24"
                transform="rotate(-90 12 12)"
                opacity="0"
              ></rect>{" "}
              <path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"></path>{" "}
              <path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"></path>{" "}
            </g>{" "}
          </g>{" "}
        </g>
      </svg>
    </motion.div>
  );
}
export default Filter;
