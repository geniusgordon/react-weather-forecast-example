import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const WeatherTable = ({ forecast, unit }) => (
  <Container>
    <Row>
    {Object.keys(forecast).map(day => (
      <Col key={day}>
        <div>{day}</div>
        <div>{(forecast[day].sum / forecast[day].count).toFixed(1)}°{unit}</div>
        <i className={`owf owf-${forecast[day].maxWeather.id}`} />
      </Col>
    ))}
    </Row>
  </Container>
);

export default WeatherTable;
