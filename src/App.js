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
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        description: data.weather[0].main,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter correct values."
      });
    }
  }

  render() {
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
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    description={this.state.description}
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