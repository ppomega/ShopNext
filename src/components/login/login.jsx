import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import GoogleLogin from "./glogin";
const Login = ({ setUsertype, setIsLoggedIn, setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [iserror, setIserror] = useState(false);
  const data = useLocation().state;
  const handleLogin = async (e) => {
    e.preventDefault();
    const token = await axios
      .get(import.meta.env.VITE_AUTH_SERVER + `/auth/${username}/${password}`)
      .then((response) => {
        return response.data;
      });
    await axios
      .get(import.meta.env.VITE_SERVER + "/auth", {
        headers: {
          Authorization: token,
        },
      })
      .then((response) => {
        if (response.data == "") {
          setIserror(true);
          return;
        } else {
          setUser(response.data);
          setIsLoggedIn(true);
          navigate(data.prev);
        }
      });
  };
  return (
    <div className="flex h-[1000px] items-center justify-center bg-[url('/bg.jpg')] bg-cover bg-no-repeat dark:bg-[url('/bgdark.png')] min-h-screen ">
      <div className="w-full relative bottom-28  max-w-md p-8 space-y-6 bg-[url('bg.jpg')] bg-cover dark:bg-[url('bgdark.png')] dark:bg-cover rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold text-center dark:text-white text-gray-800">
          Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block  dark:text-white text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 dark:bg-black dark:text-white text-red-600 bg-white hover:bg-red-700  hover:text-white  rounded-md "
          >
            Login
          </button>
        </form>
        <GoogleLogin
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          data={data}
        />
        {iserror ? (
          <div className="text-red-600">Invalid Credentials</div>
        ) : (
          <></>
        )}
        <p className="text-sm dark:text-white text-center text-gray-600">
          Not registered?{" "}
          <span
            className="font-medium text-blue-600 cursor-pointer hover:underline"
            onClick={() => {
              setUsertype("new");
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
