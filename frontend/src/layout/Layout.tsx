// src/layout/Layout.tsx
// Shared page shell — every route inside App will render through this.
// Navbar and Footer are defined once here, not repeated in each page.

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
