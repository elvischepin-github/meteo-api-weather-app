export function sortResponse(list) {
  const dayGroups = list.reduce((acc, item) => {
    const date = new Date(item.forecastTimeUtc);
    const dateStr = date.toISOString().split("T")[0];

    let group = acc.find((g) => g.date === dateStr);
    if (!group) {
      group = {
        id: acc.length + 1,
        date: dateStr,
        temperatures: [],
      };
      acc.push(group);
    }
    group.temperatures.push(item.airTemperature);

    return acc;
  }, []);

  return dayGroups;
}
