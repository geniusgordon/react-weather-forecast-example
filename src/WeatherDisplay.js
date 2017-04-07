import React from 'react';

const WeatherDisplay = ({ weather, unit }) => {
  if (!weather) {
    return null;
  }
  return (
    <div>
      <div>{weather.sum / weather.count}°{unit}</div>
      <div>{weather.maxWeather.description}</div>
      <i className={`owf owf-${weather.maxWeather.id}`} />
    </div>
  );
}

export default WeatherDisplay;
