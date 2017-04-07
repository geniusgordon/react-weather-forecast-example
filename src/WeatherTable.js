import React from 'react';
import styled from 'styled-components';
import ForecastRow from './ForecastRow';

const Container = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 8px 16px;
`;

const WeatherTable = ({ forecast, unit }) => (
  <Container>
    {Object.keys(forecast).map(day => (
      <ForecastRow key={day} day={day} weather={forecast[day]} unit={unit} />
    ))}
  </Container>
);

export default WeatherTable;
