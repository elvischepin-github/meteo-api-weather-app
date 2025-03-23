import "../styles/compiled-globals.css";

export default function Selected({ city, airTemperature, conditionCode }) {
  const now = new Date();
  const nightHours = [22, 23, 0, 1, 2, 3, 4, 5, 6];
  const currentHour = now.getHours();

  let contidionImgString = `weather/null.svg`;
  if (conditionCode) {
    if (
      (conditionCode == "clear" ||
        conditionCode == "cloudy-with-sunny-intervals") &&
      nightHours.includes(currentHour)
    ) {
      contidionImgString = `weather/${conditionCode}-night.svg`;
    } else {
      contidionImgString = `weather/${conditionCode}.svg`;
    }
  }

  console.info(`%c Weather condition: ${conditionCode}`, "color: red");
  return (
    <article className="d-flex align-items-center flex-column gap-4 p-3 custom-selected-article">
      <img src={contidionImgString} />
      <h1>{airTemperature}&deg; C</h1>
      <div className="d-flex flex-row align-items-center justify-content-center gap-3">
        <img src="location.svg" />
        <h3>{city}</h3>
      </div>
    </article>
  );
}
