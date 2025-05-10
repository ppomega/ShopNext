import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignIn({ setUsertype, setIsLoggedIn, setUser, prev }) {
  const [username, setUsername] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  async function handleSignIn(e) {
    e.preventDefault();
    const data = {
      name: username,
      mobile: mobilenumber,
      email: email,
      password: password,
    };
    console.log(data);
    await axios
      .post(import.meta.env.VITE_SERVER + "/register", data)
      .then((response) => {
        setIsLoggedIn(true);
        setUser(response.data);
        console.log(response.data);
        navigate(prev);
      });
  }
  return (
    <div className="flex h-[1000px] py-6 items-center bg-[url('/bg.jpg')] dark:bg-cover dark:bg-[url('/bgdark.png')] bg-cover justify-center min-h-screen bg-gray-100">
      <div className="w-full  relative bottom-24  max-w-md dark:bg-[url('bgdark.png')] dark:bg-cover bg-[url('bg.jpg')] bg-cover p-8 space-y-6 rounded-lg shadow-2xl">
        <h2 className="text-2xl dark:text-white font-bold darK:text-white text-center text-gray-800">
          Sign In
        </h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block dark:text-white text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className="w-full dark:placeholder-white dark:text-white px-4 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div>
            <label
              htmlFor="mobilenumber"
              className="block dark:text-white text-sm font-medium text-gray-700"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobilenumber"
              onChange={(e) => {
                setMobilenumber(e.target.value);
              }}
              className="w-full dark:placeholder-white dark:text-white px-4 py-2 mt-1 border rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your mobile number"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block dark:placeholder-white dark:text-white text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="w-full dark:placeholder-white dark:text-white px-4 py-2 mt-1 border rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block dark:text-white text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full dark:placeholder-white dark:text-white px-4 py-2 mt-1 border rounded-md focus:ring-red-500 focus:border-red-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-full px-4 dark:text-white dark:bg-black py-2 text-red-600 bg-white rounded-md hover:text-white hover:shadow-2xl  hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm dark:text-white text-center text-gray-600">
          Already registered?{" "}
          <h5
            onClick={() => {
              setUsertype("old");
            }}
            className="text-indigo-600 hover:underline"
          >
            Login
          </h5>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
