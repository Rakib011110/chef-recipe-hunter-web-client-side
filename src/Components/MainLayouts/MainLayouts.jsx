import React from "react";
import Header from "../Share/Header";
import { Outlet } from "react-router-dom";

const MainLayouts = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayouts;
