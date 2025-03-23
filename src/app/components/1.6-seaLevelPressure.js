export default function SeaLevelPressure({ seaLevelPressure }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/pressure.svg" />
        <p>Pressure</p>
      </div>
      <h2>
        {seaLevelPressure}
        <sup>hPa</sup>
      </h2>
    </article>
  );
}
