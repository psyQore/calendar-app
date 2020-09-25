import React from "react";

export const CalendarEvent = ({ event }) => {
  const { title, user, notes } = event;

  return (
    <div>
      <strong>{title} </strong>
      <strong>-{user.name}</strong>
      <p> {notes}</p>
    </div>
  );
};
