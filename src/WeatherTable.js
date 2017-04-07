import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const CurrentWeather = ({ weather, unit }) => {
  if (!weather) {
    return null;
  }
  const columns = Object.keys(weather.temps).map(time => {
    const temperature = unit === 'C'
      ? weather.temps[time]
      : weather.temps[time] * (9 / 5) + 32;
    const hour = parseInt(time.split(':')[0], 10);
    const ampm = hour < 12 ? 'AM' : 'PM';
    return (
      <Col key={time}>
        <div>{hour}{ampm}</div>
        <div>{Math.round(temperature)}°{unit}</div>
      </Col>
    );
  });
  return <Row>{columns}</Row>;
};

const ForecastRow = ({ day, weather, unit }) => {
  const average = weather.sum / weather.count;
  const temperature = unit === 'C' ? average : average * (9 / 5) + 32;
  return (
    <Row>
      <Col sm="4">
        <div>{day}</div>
      </Col>
      <Col sm="4">
        <div>{temperature.toFixed(1)}°{unit}</div>
      </Col>
      <Col sm="4">
        <i className={`owf owf-${weather.maxWeather.id}`} />
      </Col>
    </Row>
  );
};

const WeatherTable = ({ forecast, unit, date }) => (
  <Container>
    <CurrentWeather weather={forecast[date]} unit={unit} />
    {Object.keys(forecast).map(day => (
      <ForecastRow key={day} day={day} weather={forecast[day]} unit={unit} />
    ))}
  </Container>
);

export default WeatherTable;
