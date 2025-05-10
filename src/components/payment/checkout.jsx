import React, { useState } from "react";
import PayGate from "./PayGate";
import { useLocation, useNavigate } from "react-router-dom";

function Checkout({ user }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state.total;
  const items = location.state.items;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="checkout dark:bg-black dark:shadow-red-500 dark:shadow-2xl max-w-lg mx-auto p-6 relative top-1/6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl dark:text-white font-bold mb-6 text-center">
        Checkout
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block dark:text-white text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}
            required
            readOnly
            className="w-full px-3 dark:text-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            readOnly
            className="w-full px-3 dark:text-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block dark:text-white text-sm font-medium mb-1">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-3  dark:text-white py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block dark:text-white dark:bg-black text-sm font-medium mb-1">
            Total Amount
          </label>
          <p className="w-full px-3 py-2 dark:bg-black dark:text-white border border-gray-300 rounded-md bg-gray-100">
            ₹{total}
          </p>
        </div>
        <div
          onClick={() => {
            navigate("/paygate", {
              state: {
                items: items,
                shippingAddress: formData.address,
                user: user,
                amount: total,
              },
            });
          }}
          className="bg-black dark:bg-white dark:text-red-500 rounded-md px-[200px] py-3 text-white"
        >
          Proceed
        </div>
      </form>
    </div>
  );
}

export default Checkout;
