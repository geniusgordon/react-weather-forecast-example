import React from 'react';
import taiwanCities from './taiwanCities.json';
import { Container, Row, Col } from 'reactstrap';

const WeatherDisplay = ({ city, weather, unit }) => {
  if (!weather) {
    return null;
  }
  return (
    <Container>
      <Col sm="12" md={{ size: 2, offset: 5 }}>
        <div>{taiwanCities[city]}</div>        
        <div>{city}</div>
        <div>{ 
              unit === 'C' ? `${(weather.sum / weather.count).toFixed(1)}°${unit}`
                : `${((weather.sum / weather.count) * (9/5) + 32).toFixed(1)}°${unit}`
             }
        </div>
        <div>{weather.maxWeather.description}</div>
        <i className={`owf owf-${weather.maxWeather.id}`} />
      </Col>
    </Container>
  );
}

export default WeatherDisplay;
