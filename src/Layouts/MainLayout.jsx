import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <div>
        <header className="w-11/12 mx-auto">
          <Navbar></Navbar>
        </header>
        <main className="my-10">
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
