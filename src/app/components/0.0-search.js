"use client";
import "./../styles/globals.css";

import { Form, Button } from "react-bootstrap";

import { logger } from "../../../lib/logger";

export default function Search({ allCities, submitCity }) {
  const logSubmit = (e) => {
    const formData = new FormData(e.target);
    const searchedCity = formData.get("city");

    logger("search_type_field", { searched: searchedCity }).catch((er) => {
      console.error("Failed to log search_type_field:", er);
    });
  };
  return (
    <Form action={submitCity} onSubmit={logSubmit}>
      <Form.Control
        autoFocus
        className="mb-3 px-4 custom-input"
        list="cities"
        type="text"
        name="city"
        placeholder="Which city?"
      />
      <datalist id="cities">
        {allCities.map((item) => {
          return <option key={item.code} value={item.name} />;
        })}
      </datalist>

      <Button variant="secondary" className="custom-input-btn" type="submit">
        &#8617;
      </Button>
    </Form>
  );
}
