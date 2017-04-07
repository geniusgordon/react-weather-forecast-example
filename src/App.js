import React, { Component } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import WeatherForm from './WeatherForm';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const appid = '21f68350c4846bdab4c1d5d9e18a55e0';
const unitsFormat = {
  C: 'metric',
  F: 'imperial',
};

class App extends Component {
  state = {
    city: '',
    unit: 'C',
    forecast: {},
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { city, unit } = this.state;
    axios
      .get(url, { params: { q: city, units: unitsFormat[unit], appid } })
      .then(({ data }) => {
        const forecast = {};
        data.list.forEach(d => {
          const day = d.dt_txt.split(' ')[0];
          const weather = d.weather[0];
          if (!forecast[day]) {
            forecast[day] = {
              sum: 0,
              count: 0,
              weatherCount: {},
              maxWeatherCount: 0,
              maxWeather: null,
            };
          }
          forecast[day].sum += d.main.temp;
          forecast[day].count++;
          if (!forecast[day].weatherCount[weather.id]) {
            forecast[day].weatherCount[weather.id] = 0;
          }
          forecast[day].weatherCount[weather.id]++;
          if (
            forecast[day].maxWeatherCount < forecast[day].weatherCount[weather.id]
          ) {
            forecast[day].maxWeatherCount = forecast[day].weatherCount[weather.id];
            forecast[day].maxWeather = weather;
          }
        });
        this.setState({ forecast });
      });
  };
  render() {
    const { unit, forecast } = this.state;
    const days = Object.keys(forecast);
    return (
      <div>
        <WeatherDisplay weather={forecast[days[0]]} unit={unit} />
        <WeatherForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
