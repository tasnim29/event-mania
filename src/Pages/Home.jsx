import React from "react";
import Hero from "../Components/Hero/Hero";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <section className="w-11/12 mx-auto mt-20">
        <UpcomingEvents></UpcomingEvents>
      </section>
    </div>
  );
};

export default Home;
