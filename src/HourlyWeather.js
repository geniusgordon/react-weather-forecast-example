import React from 'react';
import styled from 'styled-components';
import { getTemperature } from './utils';

const Row = styled.div`
  display: flex;
  padding: 8px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
`;

const Col = styled.div`
  flex: 1;
  text-align: center;
`;

const CurrentWeather = ({ weather, unit }) => {
  if (!weather) {
    return null;
  }
  const columns = Object.keys(weather.temps).map(time => {
    const temperature = getTemperature(weather.temps[time], unit);
    const hour = parseInt(time.split(':')[0], 10);
    const ampm = hour < 12 ? 'AM' : 'PM';
    return (
      <Col key={time}>
        <div>{hour}{ampm}</div>
        <i className={`owf owf-${weather.weathers[time].id}`} />
        <div>{Math.round(temperature)}°{unit}</div>
      </Col>
    );
  });
  return <Row>{columns}</Row>;
};

export default CurrentWeather;
