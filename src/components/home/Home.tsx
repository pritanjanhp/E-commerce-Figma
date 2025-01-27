import React from "react";
import NavbarDiscount from "./NavbarDiscount";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TodaySales from "./TodaySales";

const Home = () => {
  return (
    <div>
      <NavbarDiscount />
      <div className="md:flex flex-col gap-10 ml-36 p-4">
        <Navbar />
        <Sidebar />
        <TodaySales />
      </div>
    </div>
  );
};

export default Home;
