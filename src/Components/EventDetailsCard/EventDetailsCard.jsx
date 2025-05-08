import React from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const EventDetailsCard = ({ event }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      position: "center",
      icon: "success",
      title: `Congratulations!!You have reserved a seat for the event ${event.name}`,
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-10 px-10">
      <Helmet>
        <title>EventMania | {event?.name || "Event Details"}</title>
      </Helmet>
      <div className="md:flex">
        {/* Thumbnail */}
        <div className="md:w-1/2">
          <img
            src={event.thumbnail}
            alt={event.name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Event Information */}
        <div className="md:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-primary">{event.name}</h2>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">Category:</span>
            <span className="badge badge-outline">{event.category}</span>
          </div>
          <p className="text-sm text-gray-700">{event.description}</p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <div>
              <p className="font-semibold">📍 Location:</p>
              <p>{event.location}</p>
            </div>
            <div>
              <p className="font-semibold">📅 Date:</p>
              <p>{event.date}</p>
            </div>
            <div>
              <p className="font-semibold">⏰ Time:</p>
              <p>{event.duration}</p>
            </div>
            <div>
              <p className="font-semibold">🎟️ Entry Fee:</p>
              <p>{event.entryFee}</p>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            {event.tags?.map((tag, index) => (
              <span key={index} className="badge badge-secondary text-white">
                #{tag}
              </span>
            ))}
          </div>

          {/* Organizer Info */}
          <div className="mt-4 text-sm text-gray-600">
            <p>
              <span className="font-semibold">Organizer:</span>{" "}
              {event.organizer}
            </p>
            <p>
              <span className="font-semibold">Contact:</span>{" "}
              <a
                href={`mailto:${event.contactEmail}`}
                className="text-blue-500 underline"
              >
                {event.contactEmail}
              </a>
            </p>
            <p>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href={event.website}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 underline"
              >
                Visit Site
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* form */}
      <div className="mt-12">
        <form onSubmit={handleSubmit} className="fieldset space-y-2">
          <label
            className="label text-primary text-xl font-bold"
            htmlFor="origin"
          >
            Name
          </label>
          <input
            required
            type="text"
            id="origin"
            className="input input-bordered w-full text-black"
            placeholder="Enter your name"
          />

          <label
            className="label text-primary text-xl font-bold"
            htmlFor="destination"
          >
            Email
          </label>
          <input
            required
            type="text"
            id="destination"
            className="input input-bordered w-full text-black"
            placeholder="Enter email"
          />

          <button
            type="submit"
            className="btn bg-primary text-base-200 border-none px-6 "
          >
            Reserve Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetailsCard;
