import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "../AppBar";
import Footer from "../Footer";
import { LayoutContainer, ContentContainer } from "./Layout.styled";
const Layout = () => {
  return (
    <LayoutContainer>
      <AppBar />
      <ContentContainer>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </ContentContainer>
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
