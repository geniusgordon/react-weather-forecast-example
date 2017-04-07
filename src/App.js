import React, { Component } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import WeatherTable from './WeatherTable';
import WeatherForm from './WeatherForm';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const appid = '21f68350c4846bdab4c1d5d9e18a55e0';

class App extends Component {
  state = {
    city: null,
    unit: 'C',
    forecast: {},
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    if (name === 'city' && value) {
      this.fetchWeather(value);
    }
  };
  fetchWeather = city => {
    axios
      // units : 'metric' stands for ℃
      .get(url, { params: { q: city, units: 'metric', appid } })
      .then(({ data }) => {
        const forecast = {};
        data.list.forEach(d => {
          const day = d.dt_txt.split(' ')[0];
          const time = d.dt_txt.split(' ')[1];
          const weather = d.weather[0];
          if (!forecast[day]) {
            forecast[day] = {
              temps: {},
              weathers: {},
              sum: 0,
              count: 0,
              weatherCount: {},
              maxWeatherCount: 0,
              maxWeather: null,
            };
          }
          forecast[day].maxTemp = d.main.temp_max;
          forecast[day].minTemp = d.main.temp_min;
          forecast[day].temps[time] = d.main.temp;
          forecast[day].weathers[time] = weather;
          forecast[day].sum += d.main.temp;
          forecast[day].count++;
          if (!forecast[day].weatherCount[weather.id]) {
            forecast[day].weatherCount[weather.id] = 0;
          }
          forecast[day].weatherCount[weather.id]++;
          if (
            forecast[day].maxWeatherCount <
            forecast[day].weatherCount[weather.id]
          ) {
            forecast[day].maxWeatherCount = forecast[day].weatherCount[
              weather.id
            ];
            forecast[day].maxWeather = weather;
          }
        });
        this.setState({ forecast });
      });
  };
  render() {
    const { unit, forecast, city } = this.state;
    const days = Object.keys(forecast);
    return (
      <div>
        <WeatherForm
          selectedCity={city}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <WeatherDisplay weather={forecast[days[1]]} unit={unit} city={city} />
        <WeatherTable forecast={forecast} unit={unit} />
      </div>
    );
  }
}

export default App;
