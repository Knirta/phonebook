import { Navigate, Outlet } from "react-router-dom";

const RestictedRoute = ({ isLoggedIn, redirectTo = "/contacts" }) => {
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : <Outlet />;
};

export default RestictedRoute;
