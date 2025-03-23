export default function CloudCover({ cloudCover }) {
  return (
    <article className="h-100 d-flex flex-column align-items-center justify-content-center gap-3 custom-condition-article">
      <div className="d-flex gap-3">
        <img src="conditions/clouds.svg" />
        <p>Clouds</p>
      </div>
      <h2>{cloudCover}%</h2>
    </article>
  );
}
