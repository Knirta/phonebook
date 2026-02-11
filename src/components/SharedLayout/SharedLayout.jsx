import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar";

const SharedLayout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
