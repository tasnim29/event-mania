import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <header className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
