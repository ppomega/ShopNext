import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
export default function ProductCard({ Carthandler }) {
  const navigate = useLocation();
  const product = navigate.state.product;
  const [bgLoaded, setBgLoaded] = useState(false);
  const path = product.imgPath.split("/");
  const imgpath =
    import.meta.env.VITE_SERVER + "/image/" + path[path.length - 1];

  return (
    <div className="bg-none rounded-xl  w-full">
      <img
        src={imgpath}
        onError={() => {
          setBgLoaded(false); // fallback image
        }}
        onLoad={() => {
          setBgLoaded(true);
        }}
        className={`w-1/3 h-1/5  shadow-2xl rounded-xl relative left-1/3 ${
          bgLoaded ? "block" : "hidden"
        }`}
      ></img>{" "}
      {!bgLoaded ? (
        <div className="w-1/3 h-72  rounded-xl relative left-1/3  bg-gray-400/50 animate-pulse">
          {" "}
        </div>
      ) : (
        <></>
      )}
      <></>
      <div className="p-4">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h3>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-1 line-clamp-2">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-red-600 text-4xl dark:text-red-400 font-semibold">
            ₹{product.price}
          </span>
          <button
            onClick={() => {
              Carthandler(product, 1);
            }}
            className="bg-red-500 text-xl dark:text-red-500 dark:bg-white hover:bg-red-600 text-white px-3 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
