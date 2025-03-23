export async function fetchForecast(city, condition) {
  const url = `https://api.meteo.lt/v1/places/${city}/forecasts/long-term`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }

    const json = await res.json();
    const specifiedResponse = json.forecastTimestamps[0][condition];

    return specifiedResponse;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
