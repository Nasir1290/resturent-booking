import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

export default function Main() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
