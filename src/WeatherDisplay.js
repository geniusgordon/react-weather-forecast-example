import React from 'react';

const WeatherDisplay = ({ temperature, unit, weather }) => (
  <div>
    <div>{temperature}°{unit}</div>
    <div>{weather.description}</div>
    <i className={`owf owf-${weather.id}`} />
  </div>
);

export default WeatherDisplay;
