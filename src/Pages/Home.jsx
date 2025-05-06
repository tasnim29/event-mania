import React from "react";
import Hero from "../Components/Hero/Hero";
import UpcomingEvents from "../Components/UpcomingEvents/UpcomingEvents";
import Testimonial from "../Components/Testimonial/Testimonial";

import { AuthContext } from "../AuthProvider/AuthContext";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Event Mania | Home</title>
      </Helmet>
      <Hero></Hero>
      <section className="w-11/12 mx-auto ">
        <UpcomingEvents></UpcomingEvents>
      </section>
      <section className="w-11/12 mx-auto ">
        <Testimonial></Testimonial>
      </section>
    </div>
  );
};

export default Home;
