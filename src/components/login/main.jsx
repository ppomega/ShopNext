import React, { useState } from "react";
import Login from "./login";
import SignUp from "./sigin";
import { useLocation } from "react-router";

function Auth({ user, setUser, setIsLoggedIn }) {
  const data = useLocation().state;
  const [usertype, setUsertype] = useState("old");
  return (
    <div>
      <div className="bg-tranparent dark:text-white absolute top-4 right-[630px] z-10 font-extrabold text-red-900 font-rag rounded-lg px-6 py-3 w-1/6 text-6xl">
        ShopNext
      </div>
      {usertype == "old" ? (
        <Login
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setUsertype={setUsertype}
          data={data}
        />
      ) : (
        <SignUp
          setUser={setUser}
          setIsLoggedIn={setIsLoggedIn}
          setUsertype={setUsertype}
          prev={data.prev}
        />
      )}
    </div>
  );
}

export default Auth;
