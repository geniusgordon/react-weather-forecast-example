import React, { Component } from 'react';
import WeatherDisplay from './WeatherDisplay';

class App extends Component {
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
      </div>
    );
  }
}

export default App;
