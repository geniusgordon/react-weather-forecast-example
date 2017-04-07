import React from 'react';
import styled from 'styled-components';
import taiwanCities from './taiwanCities.json';

const Container = styled.div`
  text-align: center;
`;

const ChineseName = styled.div`
  font-size: 24px;
`;

const EnglishName = styled.div`
  font-size: 18px;
`;

const Temperature = styled.div`
  font-size: 60px;
`;

const WeatherDisplay = ({ city, weather, unit }) => {
  if (!weather) {
    return null;
  }
  const average = weather.sum / weather.count;
  const temperature = unit === 'C' ? average : average * (9 / 5) + 32;
  return (
    <Container>
      <ChineseName>{taiwanCities[city]}</ChineseName>
      <EnglishName>{city}</EnglishName>
      <Temperature>{Math.round(temperature)}°{unit}</Temperature>
      <div>{weather.maxWeather.description}</div>
      <i className={`owf owf-5x owf-${weather.maxWeather.id}`} />
    </Container>
  );
};

export default WeatherDisplay;
