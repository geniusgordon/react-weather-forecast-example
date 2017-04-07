import React from 'react';
import styled from 'styled-components';
import { getTemperature } from './utils';

const Row = styled.div`
  display: flex;
  padding: 4px;
`;

const Day = styled.div`
  flex: 2;
`;

const Weather = styled.div`
  flex: 1;
`;

const MaxTemp = styled.div`
  width: 24px;
  text-align: right;
`;

const MinTemp = styled.div`
  width: 24px;
  text-align: right;
`;

const ForecastRow = ({ day, weather, unit }) => {
  const maxTemp = Math.round(getTemperature(weather.maxTemp, unit));
  const minTemp = Math.round(getTemperature(weather.minTemp, unit));
  return (
    <Row>
      <Day>{day}</Day>
      <Weather>
        <i className={`owf owf-${weather.maxWeather.id}`} />
      </Weather>
      <MaxTemp>{maxTemp}</MaxTemp>
      <MinTemp>{minTemp}</MinTemp>
    </Row>
  );
};

export default ForecastRow;
