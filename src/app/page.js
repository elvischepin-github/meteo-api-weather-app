import "./styles/globals.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

import { getDataFromSearchForm } from "./utils/getDataFrom";
import { updateCitiesStorage } from "./utils/updateCitiesStorage";

import { fetchPlace } from "./api/place/route";
import { fetchForecast } from "./api/forecast/route";
import { fetchLongTerm } from "./api/longTerm/route";
import { fetchAllPlaces } from "./api/allPlaces/route";

import Search from "./components/0.0-search";
import Selected from "./components/1.0-selected";
import FeelsLikeTemperature from "./components/1.1-feelsLikeTemperature";
import WindSpeed from "./components/1.2-windSpeed";
import CloudCover from "./components/1.3-cloudCover";
import TotalPrecipitation from "./components/1.4-totalPrecipitation";
import RelativeHumidity from "./components/1.5-relativeHumidity";
import SeaLevelPressure from "./components/1.6-seaLevelPressure";
import Forecast from "./components/2.0-forecast";
import StorageRender from "./components/3.0-storageRender";
import StorageFunctionality from "./components/storageFunctionality";

// HOME
export default async function Home({ searchParams }) {
  const paramsObj = await searchParams;
  const choice = paramsObj?.city || "Vilnius";

  const city = await fetchPlace(choice);
  const airTemperature = await fetchForecast(choice, "airTemperature");
  const feelsLikeTemperature = await fetchForecast(
    choice,
    "feelsLikeTemperature"
  );
  const windSpeed = await fetchForecast(choice, "windSpeed");
  const cloudCover = await fetchForecast(choice, "cloudCover");
  const totalPrecipitation = await fetchForecast(choice, "totalPrecipitation");
  const relativeHumidity = await fetchForecast(choice, "relativeHumidity");
  const seaLevelPressure = await fetchForecast(choice, "seaLevelPressure");
  const conditionCode = await fetchForecast(choice, "conditionCode");
  const longTerm = await fetchLongTerm(choice);
  const allCities = await fetchAllPlaces();

  return (
    <main className="vh-100 vw-100 d-flex flex-column align-items-center justify-content-center custom-background">
      {/* Search */}
      <Search allCities={allCities} onSubmit={getDataFromSearchForm} />
      {/* Storage */}
      <StorageFunctionality
        choice={choice}
        updateCitiesStorage={updateCitiesStorage}
      />
      <StorageRender />
      {city ? (
        <Container className="custom-interface p-1">
          <Col className="d-flex flex-column h-100 w-100">
            <Row className="h-100">
              <Col md={4}>
                {/* Selected */}
                <Selected
                  city={city}
                  airTemperature={airTemperature}
                  conditionCode={conditionCode}
                />
              </Col>

              {/* Conditions */}
              <Col md={8} className="d-flex flex-column">
                <Row className="h-50">
                  <Col>
                    <FeelsLikeTemperature
                      feelsLikeTemperature={feelsLikeTemperature}
                    />
                  </Col>
                  <Col>
                    <WindSpeed windSpeed={windSpeed} />
                  </Col>
                  <Col>
                    <CloudCover cloudCover={cloudCover} />
                  </Col>
                </Row>
                <Row className="h-50">
                  <Col>
                    <TotalPrecipitation
                      totalPrecipitation={totalPrecipitation}
                    />
                  </Col>
                  <Col>
                    <RelativeHumidity relativeHumidity={relativeHumidity} />
                  </Col>
                  <Col>
                    <SeaLevelPressure seaLevelPressure={seaLevelPressure} />
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* Forecasts */}
            <Row className="h-50">
              <Forecast longTerm={longTerm} />
            </Row>
          </Col>
        </Container>
      ) : (
        <h5 className="p-2 custom-error">Sorry this city is unavailable...</h5>
      )}
      <i className="mt-5 text-center">
        Data provided by the{" "}
        <a target="_blank" href="https://api.meteo.lt/">
          Meteo.lt API
        </a>{" "}
        Lithuanian Hydrometeorological Service (LHMT)
      </i>
    </main>
  );
}
