export default function FeelsLikeTemperature({ feelsLikeTemperature }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/temperature.svg" />
        <p>Feels</p>
      </div>
      <h2>{feelsLikeTemperature}&deg; C</h2>
    </article>
  );
}
