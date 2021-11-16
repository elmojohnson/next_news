import { Card, ListGroup, Row } from "react-bootstrap";
import ForecastItem from "./ForecastItem";

export default function Forecast({ forecast }) {
  return (
    <div className="mt-4">
      <p className="fs-10 text-uppercase">Forecast</p>
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            {forecast.map((f, i) => {
              return (
                <ForecastItem
                  key={i}
                  date={f.date}
                  maxtemp_c={f.day.maxtemp_c}
                  mintemp_c={f.day.mintemp_c}
                  avgtemp_c={f.day.avgtemp_c}
                  icon={f.day.condition.icon}
                  text={f.day.condition.text}
                />
              );
            })}
          </ListGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
