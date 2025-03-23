export default function TotalPrecipitation({ totalPrecipitation }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/precipitation.svg" />
        <p>Chance</p>
      </div>
      <h2>{totalPrecipitation}%</h2>
    </article>
  );
}
