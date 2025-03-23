export async function updateCitiesStorage(storageCities) {
  "use server";
  const resolvedStorageCities = storageCities;
  console.log("Received cities:", resolvedStorageCities);
  return resolvedStorageCities;
}
