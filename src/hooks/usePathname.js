import { useMemo } from "react";
import useLocation from "./useLocation";

const usePathname = () => {
  const location = useLocation();

  const pathname = useMemo(() => location.pathname, [location]);

  return pathname;
};

export default usePathname;
