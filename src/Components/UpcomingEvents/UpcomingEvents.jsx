import React from "react";
import { Link, useLoaderData } from "react-router";

const UpcomingEvents = () => {
  const data = useLoaderData();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold text-primary text-center">
          UpComing Events
        </h1>
      </div>
      <div className="px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((event, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-2xl">
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
