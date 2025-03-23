"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "react-bootstrap";

export default function StorageRender() {
  const [cities, setCities] = useState([]);
  const router = useRouter();

  const handleButton = (e) => {
    const city = e.target.innerText;
    router.push(`/?city=${encodeURIComponent(city)}`);
  };

  useEffect(() => {
    const storedCities = localStorage.getItem("storedCities");
    if (storedCities) {
      try {
        setCities(JSON.parse(storedCities));
      } catch (e) {
        console.error("Parse error:", e);
      }
    }
  }, []);

  return (
    <div className="mb-3 d-flex gap-2">
      {cities.length > 0
        ? cities.map((item, i) => (
            <Button
              variant="secondary"
              className="custom-storage-btn"
              onClick={handleButton}
              key={i}
            >
              {item}
            </Button>
          ))
        : null}
    </div>
  );
}
