import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="container my-5">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
