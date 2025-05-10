import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
const GoogleLogin = ({ setUser, setIsLoggedIn, data }) => {
  const buttonRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GCID,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(buttonRef.current, {
        theme: "outline",
        size: "large",
      });
    };
    document.body.appendChild(script);
  }, []);

  const handleCredentialResponse = async (response) => {
    await axios
      .post(
        import.meta.env.VITE_SERVER + "/gregister",
        {},
        {
          headers: {
            Authorization: response.credential,
          },
        }
      )
      .then((res) => {
        setUser(res.data);
        setIsLoggedIn(true);
        navigate(data.prev);
      });
  };
  return <div ref={buttonRef}></div>;
};

export default GoogleLogin;
