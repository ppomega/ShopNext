import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
function loadScript(src) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

function PayGate() {
  const location = useLocation();
  const [order, setOrder] = useState({});
  const items = location.state.items;
  const amount = location.state.amount;
  const shippingAddress = location.state.shippingAddress;
  const user = location.state.user;
  useEffect(() => {
    displayRazorpay(amount);
  }, []);
  async function displayRazorpay(amount) {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razropay failed to load!!");
      return;
    }
    const data = await axios
      .post(import.meta.env.VITE_SERVER + "/create_order" + `/${amount}`)
      .then((response) => {
        return response.data;
      });
    const options = {
      key: "rzp_test_IuuFWm9Y6VfN4m", // Enter the Key ID generated from the Dashboard
      amount: `${amount * 100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Shop Next",
      description: "Test Transaction",
      order_id: data.id,
      handler: async function (response) {
        const item_ids = items.map((item) => item._id);
        const order = {
          orderId: data.id,
          user: user._id,
          items: item_ids,
          total: amount,
          payement_id: response.razorpay_payment_id,
          shippingAddress: shippingAddress,
          createdAt: new Date().toISOString(),
        };
        await axios
          .post(import.meta.env.VITE_SERVER + "/submit_order", order)
          .then((response) => {
            setOrder(response.data);
            console.log(response.data);
          });
      },
      theme: {
        color: "#3399cc",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  return (
    <div className="relative top-1/5 font-inter left-1/4 flex flex-col gap-y-3 py-2.5 justify-around">
      <h1 className="text-8xl font-bold my-8 font-rag text-red-400">
        Thank you for your order
      </h1>
      <OrderDetail order={order} />
    </div>
  );

  function OrderDetail({ order }) {
    return (
      <div className="flex flex-col w-1/2 gap-y-4 p-4 border-2 border-gray-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 text-black dark:text-white">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
          Order Details
        </h2>
        <div className="flex justify-between">
          <span className="font-medium">Order ID:</span>
          <span>{order.orderId}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment ID:</span>
          <span>{order.payement_id}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Created At:</span>
          <span>{order.createdAt}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Shipping Address:</span>
          <span>{order.shippingAddress}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Total:</span>
          <span>₹{order.total}</span>
        </div>
      </div>
    );
  }
}

export default PayGate;
