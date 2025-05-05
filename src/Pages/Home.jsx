import React from "react";
import Hero from "../Components/Hero/Hero";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import Testimonial from "../Components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="space-y-20">
      <Hero></Hero>
      <section className="w-11/12 mx-auto ">
        <UpcomingEvents></UpcomingEvents>
      </section>
      <section>
        <Testimonial></Testimonial>
      </section>
    </div>
  );
};

export default Home;
