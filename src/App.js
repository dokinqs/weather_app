import React, { Component } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const API_KEY = "9877ff80423f9104017003346d44fe01";

class App extends Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    isImperial: true,
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

    // let tempUnit = "F";
    // let unit = tempUnit == "F" ? "imperial" : "metric";
  
    // const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city||isZipcode},${country}&appid=${API_KEY}&units=${unit}`);
    const api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city||isZipcode},${country}&appid=${API_KEY}&units=imperial`);

    const data = await api.json();

    if (data.name && data.sys.country != "IT") {
      this.setState({
        h1: "",
        icon: data.weather[0].icon,
        city: data.name,
        country: data.sys.country,
        description: data.weather[0].main,
        temperature: Math.round(data.main.temp),
        humidity: data.main.humidity,
        wind: Math.round(data.wind.speed),
        error: ""
      });
    } else {
      this.setState({
        h1: "Weather",
        icon: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        temperature: undefined,
        humidity: undefined,
        wind: undefined,
        error: "Please enter correct values."
      });
    }
  }

  toggleTemp = (e) => {
    this.setState({
      isImperial: e.target.textContent == "°F" ? true : false
    });

    // this.setState(state => ({
    //   isImperial: !state.isImperial
    // }));

    // const currentState = this.state.isImperial;
    // this.setState({ 
    //   isImperial: !currentState 
    // });
  }

  render() {
    let iconurl = this.state.icon == undefined ? undefined : `https://openweathermap.org/img/w/${this.state.icon}.png`;

    let tempDate = new Date();
    // let date = `${(tempDate.getMonth() + 1)}/${tempDate.getDate()}  ---  ${tempDate.getHours()}:${tempDate.getMinutes()}`;
    let date = tempDate.toLocaleDateString("en-US", {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
    date = this.state.h1 == undefined ? date : "";

    let h1 = this.state.h1 == undefined ? "Weather" : "";

    let tempUnit = "F";
    let unit = tempUnit == "F" ? "imperial" : "metric";
    let resultTemp;
    let fahTemp = this.state.temperature;
    let celTemp = Math.round((fahTemp - 32) * 5 / 9);
      
    // if (unit == "C") {
    if (this.state.isImperial == false) {
      resultTemp = celTemp + " °C";
    } else {
      resultTemp = fahTemp + " °F";
    }

    // if (this.state.isImperial == false) {
      // span.celsius add className .activeUnit
      // span.fahrenheit remove className .activeUnit
    // } else {
      // span.celsius remove className .activeUnit
      // span.fahrenheit add className .activeUnit
    // }
    
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="form-container">
                  <h1 className="title-container__title">{h1}</h1>
                  <h3>{date}</h3>
                  <Weather 
                    icon={iconurl}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    temperature={resultTemp} 
                    humidity={this.state.humidity}
                    wind={this.state.wind}
                    error={this.state.error}
                  />
                  <Form getWeather={this.getWeather} />
                  <div className="toggleSection">
                    <span className={this.state.isImperial == true ? "clickableUnit fahrenheit activeUnit" : "clickableUnit fahrenheit"} onClick={this.toggleTemp}>°F</span>...
                    <span className={this.state.isImperial == false ? "clickableUnit celsius activeUnit" : "clickableUnit celsius"} onClick={this.toggleTemp}>°C</span>
                  </div>
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