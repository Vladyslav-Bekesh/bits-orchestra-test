import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../components/AppBar";

const Layout = () => {
  return (
    <div style={{ margin: "0 auto" }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
