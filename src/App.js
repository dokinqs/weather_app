import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    let city = e.target.elements.city.value;
    let country = e.target.elements.country.value;

    let isZipcode = /^\d{5}$/.test(city); 
    if (isZipcode) {
      country = 'us';
    } 

    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city||isZipcode},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api.json();

    if (data.name && data.sys.country != "IT") {
      this.setState({
        city: data.name,
        country: data.sys.country,
        icon: data.weather[0].icon,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].main,
        wind: Math.round(data.wind.speed),
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        icon: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        wind: undefined,
        error: "Please enter correct values."
      });
    }
  }

  render() {
    let iconurl = `https://openweathermap.org/img/w/${this.state.icon}.png`;

    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="form-container">
                  <h1 className="title-container__title">Weather Lookup</h1>
                  <Weather 
                    city={this.state.city}
                    country={this.state.country}
                    icon={iconurl}
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    description={this.state.description}
                    wind={this.state.wind}
                    error={this.state.error}
                  />
                  <Form getWeather={this.getWeather} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;