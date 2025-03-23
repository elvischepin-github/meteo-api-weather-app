export async function fetchAllPlaces() {
  const url = `https://api.meteo.lt/v1/places`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      return null;
    }

    const json = await res.json();

    return json;
  } catch (e) {
    console.error(e.message);
    return null;
  }
}
