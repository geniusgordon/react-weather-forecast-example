import React from 'react';
import styled from 'styled-components';
import HourlyWeather from './HourlyWeather';
import { getTemperature } from './utils';
import taiwanCities from './taiwanCities.json';

const Summary = styled.div`
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
  const temperature = getTemperature(average, unit);
  return (
    <div>
      <Summary>
        <ChineseName>{taiwanCities[city]}</ChineseName>
        <EnglishName>{city}</EnglishName>
        <Temperature>{Math.round(temperature)}°{unit}</Temperature>
        <div>{weather.maxWeather.description}</div>
        <i className={`owf owf-5x owf-${weather.maxWeather.id}`} />
      </Summary>
      <HourlyWeather weather={weather} unit={unit} />
    </div>
  );
};

export default WeatherDisplay;
