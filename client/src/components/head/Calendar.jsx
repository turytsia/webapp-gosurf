import React from "react";

export default function Calendar() {
    const date = new Date();

    const year = date.getFullYear()
    const month = date.toISOString().slice(5,7)
    const day = date.getDate()

  return (
    <div className="head-menu__date">
      <span className="head-menu__date-day">{day}</span>
      <span className="head-menu__date-rest">{month} | {year}</span>
    </div>
  );
}
