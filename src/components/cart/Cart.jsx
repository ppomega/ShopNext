import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Cart({ user, setCart, Carthandler, cart, isLoggedIn }) {
  const location = useLocation();
  const navigate = useNavigate();

  const [items, setItems] = useState(cart);
  useEffect(() => {
    setCart(items);
    setCart(items);
  }, [items]);
  const updateQuantity = (id, delta) => {
    setItems((prev) =>
      prev.map((item) =>
        item.imgPath === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.imgPath !== id));
  };

  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="w-4/5 mx-auto shadow-red-500 shadow-2xl dark:bg-black  relative top-30 p-6 font-inter bg-white  rounded-lg ">
      <h2 className="text-xl dark:text-white font-bold text-black mb-4">
        Shopping Cart
      </h2>
      {items.length === 0 ? (
        <p className="text-black dark:text-white ">Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => {
            const path = item.imgPath.split("/");
            const imgPath =
              import.meta.env.VITE_SERVER + "/image/" + path[path.length - 1];
            return (
              <li
                key={imgPath}
                className="flex justify-between items-center border-b pb-3"
              >
                <div className="flex items-center  gap-36">
                  <img
                    src={imgPath}
                    alt={item.name}
                    className="w-24 h-24 rounded object-cover"
                  />
                  <div>
                    <h3 className="text-2xl dark:text-white font-semibold text-black ">
                      {item.name}
                    </h3>
                    <p className="text-lg dark:text-white text-black ">
                      ₹{item.price} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.imgPath, -1)}
                    className="px-2 py-1 bg-gray-200 text-black  rounded hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-black dark:text-white ">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.imgPath, 1)}
                    className="px-2 py-1 bg-gray-200 text-black  rounded hover:bg-gray-300"
                  >
                    +
                  </button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={() => removeItem(item.imgPath)}
                    className="text-white dark:text-black dark:bg-white  rounded-lg bg-black p-3 ml-4 hover:underline text-sm"
                  >
                    Remove
                  </motion.button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      {items.length > 0 && (
        <div className="mt-4 flex justify-between items-center">
          <span className="text-2xl dark:text-white font-semibold text-black ">
            Total: ₹{total}
          </span>
          <motion.button
            whileHover={{ scale: 1.2 }}
            onClick={() => {
              console.log(isLoggedIn);
              if (!isLoggedIn) {
                navigate("/login", { state: { prev: location.pathname } });
              } else {
                console.log(items);
                console.log(total);
                navigate("/pay", { state: { total: total, items: items } });
              }
            }}
            className="bg-red-500 dark:text-red-500 dark:hover:bg-white dark:bg-white text-2xl font-rag hover:bg-black text-white px-4 py-2 rounded"
          >
            Checkout
          </motion.button>
        </div>
      )}
    </div>
  );
}
