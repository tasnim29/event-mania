import React from "react";
import { Link, useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="container flex flex-col items-center mx-auto  md:p-10 md:px-12">
        <h1 className="p-4 text-4xl text-primary shadow-2xl font-bold leading-none text-center">
          UpComing Events
        </h1>
      </div>
      <div className="px-4  grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {data.map((event, index) => (
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100}
            data-aos-duration="800"
            data-aos-easing="ease-out-cubic"
            key={index}
            className="card bg-base-100 shadow-2xl hover:shadow-secondary transition-shadow duration-500"
          >
            <figure className=" overflow-hidden g">
              <img
                src={event.thumbnail}
                alt={event.name}
                className="object-cover w-full h-60 transform transition duration-300 hover:scale-110"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-primary">{event.name}</h2>
              <p className="text-gray-700">{event.location}</p>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm font-medium">Entry Fee: {event.entryFee}</p>
              <div className="card-actions justify-end mt-2">
                <div className="btn btn-sm btn-primary">{event.category}</div>
                <Link to={`/eventDetails/${event.name}`}>
                  <button className="btn btn-sm btn-secondary">
                    View More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UpcomingEvents;
