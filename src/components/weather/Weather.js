import React from "react";
import "../../scss/main.scss";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    console.log("I am from cosntractor");
    this.state = {
      temperature: "",
      weatherData: "",
      temp: "",
      feelsLike: "",
      city: "",
      country: "",
      tempCel: ""
    };
  }

  componentDidMount() {
    let url =
      "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=63e17b0572ea636e8f4993951d521c05";
    fetch(url)
      .then(response => response.json())
      .then(weatherData => {
        this.setState({
          weatherData: weatherData,
          temp: weatherData.list[0].main.temp,
          feelsLike: weatherData.list[0].main.feels_like,
          city: weatherData.city.name,
          country: weatherData.city.country
        });
      });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    const tempInCelsius = x => {
      const kelvin = x;
      const celsius = Math.floor(kelvin - 273.15) + " ℃ ";
      return celsius;
    };
    const temp = tempInCelsius(this.state.temp);
    const feelsLike = tempInCelsius(this.state.feelsLike);
    // console.log(this.state.weatherData);
    // console.log(this.state.temp);
    // console.log(this.state.feelsLike);
    // console.log(this.state.country);
    return (
      <div className="weather_container">
        <div className="weather">
          <h2>Temp: {temp}</h2>
          <h2>Feels like: {feelsLike}</h2>
          <h2>City: {this.state.city}</h2>
          <h2>{this.state.temperature}</h2>
        </div>
      </div>
    );
  }
}
export default Weather;
