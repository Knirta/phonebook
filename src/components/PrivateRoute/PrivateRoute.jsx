import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ isLoggedIn, redirectTo = "/login" }) => {
  return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
