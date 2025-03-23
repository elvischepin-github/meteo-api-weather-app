export async function getDataFromSearchForm(data) {
  "use server";
  const city = data.get("city");

  return city;
}
