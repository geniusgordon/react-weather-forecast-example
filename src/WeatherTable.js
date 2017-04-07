import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const WeatherTable = ({ forecast, unit, date }) => (
  <Container>
    <Row>
      {
        forecast[date] ? 
          Object.keys(forecast[date].temps).map(
            (time, key) => <Col key={time}>
              <div>{time}</div>
              <div>
                {
                  unit === 'C' ? `${forecast[date].temps[time]}°${unit}`
                    : `${(forecast[date].temps[time] * (9/5) + 32).toFixed(1)}°${unit}`
                }
              </div>
            </Col> 
          ) : null
      }
    </Row>
    {Object.keys(forecast).map(day => (
      <Row key={day}>
        <Col sm="4">
          <div>{day}</div>
        </Col>
        <Col sm="4">
          <div>{ 
                unit === 'C' ? `${(forecast[day].sum / forecast[day].count).toFixed(1)}°${unit}`
                  : `${((forecast[day].sum / forecast[day].count) * (9/5) + 32).toFixed(1)}°${unit}`
               }
          </div>
        </Col>
        <Col sm="4">
          <i className={`owf owf-${forecast[day].maxWeather.id}`} />
        </Col>
      </Row>
    ))}
  </Container>
);

export default WeatherTable;
