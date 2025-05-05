import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import EventDetailsCard from "../Components/EventDetailsCard/EventDetailsCard";

const EventDetails = () => {
  const { name } = useParams();
  const data = useLoaderData();
  const [event, setEvent] = useState({});
  useEffect(() => {
    const selectedEvent = data.find((event) => event.name == name);
    setEvent(selectedEvent);
  }, [data, name]);
  //   console.log(event);
  return (
    <div>
      <EventDetailsCard event={event}></EventDetailsCard>
    </div>
  );
};

export default EventDetails;
