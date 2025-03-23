export async function fetchPlace(city = "Vilnius") {
  const url = `https://api.meteo.lt/v1/places/${city}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }

    const json = await res.json();

    return json.name;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
