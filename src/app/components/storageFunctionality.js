"use client";
import { useEffect, useRef } from "react";

export default function StorageFunctionality({ choice, updateCitiesStorage }) {
  const citiesRef = useRef([]);

  useEffect(() => {
    const citiesInStorage = localStorage.getItem("storedCities");
    if (citiesInStorage) {
      try {
        citiesRef.current = JSON.parse(citiesInStorage);
        if (Array.isArray(citiesRef.current) == false) {
          citiesRef.current = [];
        }
      } catch (e) {
        console.error("Parse fail:", e);
        citiesRef.current = [];
      }
    }

    choice = String(choice).toLowerCase();
    choice = choice.charAt(0).toUpperCase() + choice.slice(1);

    let valid = true;
    for (let i = 0; i < citiesRef.current.length; i++) {
      if (choice == citiesRef.current[i]) {
        valid = false;
      }
    }

    if (valid) {
      citiesRef.current.push(choice);
    }

    if (citiesRef.current.length > 3) {
      citiesRef.current = citiesRef.current.slice(-3);
    }

    localStorage.setItem("storedCities", JSON.stringify(citiesRef.current));

    if (updateCitiesStorage) {
      updateCitiesStorage(citiesRef.current)
        .then((updatedCities) => {
          console.log("updatedCities:", updatedCities);
        })
        .catch((error) => {
          console.error("Failed with updatedCities:", error);
        });
    }
  }, [choice, updateCitiesStorage]);

  return null;
}
