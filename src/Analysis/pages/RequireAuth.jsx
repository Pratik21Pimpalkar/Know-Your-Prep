import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

const RequireAuth = () => {
  const [cookies, setCookie] = useCookies(["username", "o1kypuser"]);
  const location = useLocation();

  return cookies.o1kypuser ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
