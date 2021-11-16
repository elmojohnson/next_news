import { Col, Image, ListGroup, Row } from "react-bootstrap";

export default function ForecastItem({
  date,
  maxtemp_c,
  mintemp_c,
  avgtemp_c,
  icon,
  text,
}) {
  const dateString = new Date(date);
  const weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";
  return (
    <ListGroup.Item>
      <Row className="align-items-center">
        <Col lg={3} md={3} xs={3}>
          <p>{weekday[dateString.getDay()].slice(0, 3)}</p>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <Image src={icon} fluid />
        </Col>
        <Col lg={3} md={3} xs={3}>
          <p>
            {mintemp_c}
            {"\u00b0"}
          </p>
        </Col>
        <Col lg={3} md={3} xs={3}>
          <p>
            {maxtemp_c}
            {"\u00b0"}
          </p>
        </Col>
      </Row>
    </ListGroup.Item>
  );
}
