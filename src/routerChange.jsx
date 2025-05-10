import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteChangeListener = ({ setL }) => {
  const location = useLocation();

  useEffect(() => {
    setL(location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
};
export default RouteChangeListener;
