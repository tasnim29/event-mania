import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <header className=" mt-5">
          <Navbar></Navbar>
        </header>
        <main className=" min-h-[calc(100vh-200px)]">
          <Outlet></Outlet>
        </main>
      </div>
      <section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainLayout;
