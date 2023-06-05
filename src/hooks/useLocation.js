import { useEffect, useState, useCallback } from "react";

const useLocation = () => {
  const [location, setLocation] = useState(window.location);

  const handleLocationChange = useCallback(() => {
    setLocation(window.location);
  }, []);

  useEffect(() => {
    window.addEventListener("popstate", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [handleLocationChange]);

  return location;
};

export default useLocation;
