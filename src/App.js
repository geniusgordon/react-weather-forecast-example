import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';
import WeatherForm from './WeatherForm';

class App extends Component {
  state = {
    city: '',
    unit: 'C',
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <WeatherDisplay
          temperature={25}
          unit="C"
          weather={{
            id: 800,
            description: 'clear sky',
          }}
        />
        <WeatherForm
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
