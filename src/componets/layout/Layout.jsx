import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "../navbar/Navber";
import STwo from "../STwo/STwo";
import Footer from "../footer/Footer";
export default function Layout() {
  return (
    <div>
      <Navber/>
      <Outlet />
      <STwo/>
      <Footer/>
    </div>
  );
}
