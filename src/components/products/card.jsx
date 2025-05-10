import React, { useState, useEffect } from "react";
import Loader from "../glassLoader";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function Card({ product, Carthandler }) {
  const [ishover, setIsHover] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const path = product.imgPath.split("/");
  const imgpath =
    import.meta.env.VITE_SERVER + "/image/" + path[path.length - 1];

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative top-0 dark:bg-[url('bgdark.jpg')] dark:bg-cover   bg-cover rounded-lg bg-[url('bg.avif')] "
      onClick={() => {
        navigate("/product", { state: { product } });
      }}
    >
      <div className="w-full h-3/4 rounded-lg  ">
        <img
          src={imgpath}
          onError={() => {
            setBgLoaded(false); // fallback image
          }}
          onLoad={() => {
            setBgLoaded(true);
          }}
          className={`w-5/6 rounded-xl  mx-8 my-2 h-5/6 ${
            bgLoaded ? "block" : "hidden"
          }`}
        ></img>{" "}
        {!bgLoaded ? <Loader /> : <></>}
        <></>
        <div className="w-full flex font-integral justify-around bg-transparent ">
          <h2 className="card-title text-2xl p-3 dark:text-white  text-black ">
            {product.name}
          </h2>
          <p className="card-price relative top-3 px-1 dark:text-white text-2xl  text-black">
            ₹{product.price}
          </p>
        </div>
        {ishover ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full bg-[url('bg.avif')] bg-cover dark:bg-[url('bgdark.jpg')] dark:bg-cover h-full flex absolute rounded-lg opacity-90 bottom-0  justify-between font-white"
            />
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                Carthandler(product, 1);
              }}
              className="w-1/3 mx-4 dark:hover:text-red-600 hover:text-white  dark:bg-white  dark:text-black h-1/5 my-1.5 relative bottom-24 left-6 bg-red-500 text-white rounded-md"
            >
              Buy Now
            </motion.button>
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              onClick={(e) => {
                e.stopPropagation();
                Carthandler(product, 1);
              }}
              className="w-1/3 dark:bg-white dark:hover:text-red-600 hover:text-white dark:text-black mx-4 my-1.5 h-1/5 relative bottom-24 left-12 bg-red-500 text-white rounded-md"
            >
              Add To Cart
            </motion.button>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
export default Card;
