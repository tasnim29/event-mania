import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      {/* heading */}
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Event Mania
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Hey!!</span>
          </span>{" "}
          Welcome To The Blog Page
        </h2>
      </div>
      {/* body */}
      <div className="mt-8">
        {/* first video */}
        <div>
          <div className="flex justify-center my-8">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/10d0OS8IA2Q?si=OQN0TrOEuvoww4Vi"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <div className=" mx-auto mt-8 text-gray-700 text-lg ">
            <h3 className="text-2xl font-semibold mb-4">
              What You’ll Learn in This Video
            </h3>
            <p>
              In this video, we explore the fundamentals of event management —
              including planning, organizing, and executing successful events.
              Whether you're new to event coordination or looking to sharpen
              your skills, this tutorial provides practical strategies and
              insights to help you manage everything from small meetups to
              large-scale conferences with confidence.
            </p>
          </div>
        </div>
        {/* second video */}
        <div>
          <div className="flex justify-center my-8">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/jjrkCYw7EYk?si=x6KZi47pc-QZHxk2"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div className="mx-auto mt-8 text-gray-700 text-lg ">
            <p>
              Fab24 brought together over 1,000 creative minds from around the
              world for a week of workshops, inspiring talks, fun, and
              collaboration!! From hands-on activities to powerful presentations
              on the Main Stage, this event was all about pushing the boundaries
              of digital fabrication and learning.
            </p>
          </div>
        </div>

        {/* comments */}
        <div className="my-8">
          <h1 className="text-center text-3xl font-semibold text-gray-700 mb-8">
            Satisfied Subscriber
          </h1>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              I chose to go to the one of your sports events..
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-secondary">
              It was amazing..Honestly
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-accent">
              Great job guys!! Hope to come to next events
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-neutral">Cheers!!</div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-info">
              We are glad that you have liked it
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-success">
              You have been given a great honor.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble chat-bubble-warning">
              You are welcome anytime...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
