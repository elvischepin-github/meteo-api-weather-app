export default function RelativeHumidity({ relativeHumidity }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/humidity.svg" />
        <p>Humidity</p>
      </div>
      <h2>{relativeHumidity}%</h2>
    </article>
  );
}
