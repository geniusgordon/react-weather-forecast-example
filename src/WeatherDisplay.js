import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const WeatherDisplay = ({ weather, unit }) => {
  if (!weather) {
    return null;
  }
  return (
    <Container>
      <Col sm="12" md={{ size: 2, offset: 5 }}>
        <div>{(weather.sum / weather.count).toFixed(1)}°{unit}</div>
        <div>{weather.maxWeather.description}</div>
        <i className={`owf owf-${weather.maxWeather.id}`} />
      </Col>
    </Container>
  );
}

export default WeatherDisplay;
