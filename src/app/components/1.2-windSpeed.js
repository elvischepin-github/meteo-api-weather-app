export default function WindSpeed({ windSpeed }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/wind.svg" />
        <p>Wind</p>
      </div>
      <h2>{windSpeed} m/s</h2>
    </article>
  );
}
