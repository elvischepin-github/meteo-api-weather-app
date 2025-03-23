"use client";
import { useState, useEffect } from "react";

import { Col } from "react-bootstrap";

export default function Forecast({ longTerm }) {
  const [resolvedLongTerm, setLongTerm] = useState(null);

  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    if (!longTerm) {
      console.log("Fetching error longTerm:", longTerm);
      setLongTerm([]);
      return;
    }

    if (longTerm instanceof Promise) {
      longTerm
        .then((data) => setLongTerm(data))
        .catch((e) => {
          console.error(e);
          setLongTerm([]);
        });
    } else {
      setLongTerm(longTerm);
    }
  }, [longTerm]);

  if (!resolvedLongTerm) {
    return (
      <>
        {Array(5)
          .fill(null)
          .map((_, i) => (
            <Col key={i}>
              <img style={{ height: "100px" }} src="img/loading.gif" />
            </Col>
          ))}
      </>
    );
  }

  return (
    <>
      {resolvedLongTerm.slice(1, 6).map((element) => (
        <Col
          className="d-flex flex-column align-items-center justify-content-center custom-forecast-five"
          key={element.id}
        >
          <img src="forecast/day.svg" />
          <h4>{Math.max(...element.temperatures)}° C</h4>
          <hr />
          <img src="forecast/night.svg" />
          <h4>{Math.min(...element.temperatures)}° C</h4>
          <h6>{weekDays[new Date(element.date).getDay()]}</h6>
        </Col>
      ))}
    </>
  );
}
