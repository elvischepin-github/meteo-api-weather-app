import { sortResponse } from "@/app/utils/sortResponse";

export async function fetchLongTerm(city) {
  const url = `https://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }
    const json = await res.json();
    const jsonPropList = json.forecastTimestamps;

    return sortResponse(jsonPropList);
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
