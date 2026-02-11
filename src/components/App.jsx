import { useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import RestrictedRoute from "../components/RestrictedRoute";
import SharedLayout from "../components/SharedLayout";
import { refreshUser } from "../redux/auth/operations.js";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../redux/auth/selectors.js";

const HomePage = lazy(() => import("../pages/HomePage"));
const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const RegistrationPage = lazy(() => import("../pages/RegistrationPage"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayout />,
      children: [
        { index: true, element: <HomePage /> },
        {
          element: <PrivateRoute isLoggedIn={isLoggedIn} />,
          children: [{ path: "contacts", element: <ContactsPage /> }],
        },
        {
          element: <RestrictedRoute isLoggedIn={isLoggedIn} />,
          children: [
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegistrationPage /> },
          ],
        },
      ],
    },
  ]);

  return !isRefreshing && <RouterProvider router={router} />;
};

export default App;
