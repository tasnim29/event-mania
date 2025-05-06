import React from "react";

const testimonials = [
  {
    name: "Tasnim Mahmud",

    quote: "Extremely fun to go to the sports events..Loved it!!",
    image:
      "https://i.ibb.co.com/9mq9Wrcg/466892000-4003316376570018-861235499832487027-n-1.jpg",
  },
  {
    name: "Leo Messi",

    quote:
      "This platform helped us grow 300%. Absolutely recommend to all founders!",
    image:
      "https://i.ibb.co.com/nqpz4mJS/1736031601544-8c92043e-fbc7-4e7e-9486-4a099dd0b5d4.jpg",
  },
  {
    name: "Jhankar Mahbub",

    quote:
      "Tech that just works. Support was also very responsive and helpful.",
    image: "https://i.ibb.co.com/Q7pvjLB4/images-1.jpg",
  },
];

const Testimonial = () => {
  return (
    <section>
      <div className="container flex flex-col items-center mx-auto  md:p-10 md:px-12">
        <h1 className="p-4 text-4xl text-primary shadow-2xl font-bold leading-none text-center">
          What people are saying about us
        </h1>
      </div>
      <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10 ">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="flex flex-col max-w-sm mx-4 my-6 shadow-lg bg-gray-700 rounded-xl hover:scale-105 cursor-pointer"
          >
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center text-white">
                {item.quote}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg ">
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full "
              />
              <p className="text-xl font-semibold leading-tight text-white">
                {item.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
