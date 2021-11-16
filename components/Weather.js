import axios from "axios";
import { useEffect, useState } from "react";
import { Row, Col, Container, Image, Card } from "react-bootstrap";
import Forecast from "./Forecast";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Weather() {
  const [weather, setWeather] = useState({
    location: "",
    temp_c: 0,
    last_updated: "",
    icon: "",
    text: "",
    forecast: [],
  });
  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    const data = await axios.get(
      `http://api.weatherapi.com/v1/forecast.json?key=db30971f617f4893a0b234429211311%20&q=Sydney&days=10&aqi=no&alerts=no`
    );
    const w = data.data.current;
    setWeather({
      location: data.data.location.name,
      temp_c: w.temp_c,
      last_updated: w.last_updated,
      icon: w.condition.icon,
      text: w.condition.text,
      forecast: data.data.forecast.forecastday,
    });
    setLoading(false);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div>
      {loading ? (
        <Container><Skeleton height={400} /></Container>
      ) : (
        <div>
          <Container className="p-2">
            <p className="fs-10 text-uppercase">Weather Today</p>
            <Card>
              <Card.Body>
                <Row className="row row-cols-auto justify-content-center">
                  <Col className="text-center">
                    <small className="lh-1 fw-normal">{weather.text}</small>
                    <br />
                    <Image src={weather.icon} />
                  </Col>
                  <Col>
                    <div className="text-center">
                      <h1 className="display-1 lh-1">
                        {weather.temp_c}
                        {"\u00b0"}
                      </h1>
                      <h5 className="lh-1 fw-normal text-muted">
                        {weather.location}
                      </h5>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Forecast forecast={weather.forecast} />
          </Container>
        </div>
      )}
    </div>
  );
}
