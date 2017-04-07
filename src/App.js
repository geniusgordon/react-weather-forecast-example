import React, { Component } from 'react';
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay';
import WeatherTable from './WeatherTable';
import WeatherForm from './WeatherForm';

const url = 'http://api.openweathermap.org/data/2.5/forecast';
const appid = '21f68350c4846bdab4c1d5d9e18a55e0';

const getCurrentDate = () => {
  const dateObject = new Date();
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const monthString = month.length > 1 ? month : `0${month}`;
  const date = dateObject.getDate();
  const dateString = date.length > 1 ? date : `0${date}`;

  return `${year}-${monthString}-${dateString}`;
};

class App extends Component {
  state = {
    city: '',
    unit: 'C',
    forecast: {},
    date: getCurrentDate(),
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { city } = this.state;
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
              sum: 0,
              count: 0,
              weatherCount: {},
              maxWeatherCount: 0,
              maxWeather: null,
            };
          }
          forecast[day].temps[time] = d.main.temp;
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
    const { unit, forecast, city, date } = this.state;
    const days = Object.keys(forecast);
    return (
      <div>
        <WeatherDisplay weather={forecast[days[0]]} unit={unit} city={city} />
        <WeatherTable forecast={forecast} unit={unit} date={date} />
        <WeatherForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
