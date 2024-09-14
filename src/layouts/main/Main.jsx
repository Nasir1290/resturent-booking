import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";
import useOpenProfile from "../../hooks/useOpenProfile";
import UserProfile from "../../pages/user/UserProfile";

export default function Main() {
  const { isOpenProfile, setIsOpenProfile } = useOpenProfile();
  return (
    <>
      <div className="container">
        <Navbar />
        {isOpenProfile && <UserProfile/>}
        <div className="min-h-screen">
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
}
