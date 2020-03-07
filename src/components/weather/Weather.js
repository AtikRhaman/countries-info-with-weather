import React from "react";
import "../../scss/main.scss";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherData: "",
      temp: "",
      feelsLike: "",
      city: "Dhaka",
      tempCel: "",
      search: "",
      atik: "",
      display: ""
    };
  }

  fatchingAPI = () => {

    
    let weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=ab80deeb379a89ca62095db2233caa4b`;
    fetch(weatherUrl)
      .then(response => response.json())
      .then(weatherData => {
        this.setState({
          weatherData: weatherData,
          temp: weatherData.main.temp,
          feelsLike: weatherData.main.feels_like,
          city: weatherData.name,
          country: weatherData.sys.country
        });
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value, city: value });
  };

  componentDidMount() {
    this.fatchingAPI();
  }

  componentDidUpdate(prevProps, prevState) {}

  handleSubmit = e => {
    this.setState({ display: this.state.search });
    e.preventDefault();
    this.fatchingAPI();
  };

  render() {
    const tempInCelsius = x => {
      const kelvin = x;
      const celsius = Math.floor(kelvin - 273.15) + " ℃ ";
      return celsius;
    };
    const temp = tempInCelsius(this.state.temp);
    const feelsLike = tempInCelsius(this.state.feelsLike);
    return (
      <div className="weather_container">
        <div className="weather">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input
                type="text"
                name="search"
                value={this.state.search}
                onChange={this.handleChange}
                placeholder="search"
              />
            </div>
            <button>Search</button>
          </form>
          <h2>Temp: {temp}</h2>
          <h2>Feels like: {feelsLike}</h2>
          {this.state.display ? (
            <h2>City: {this.state.display}</h2>
          ) : (
            <h2>City: {this.state.city}</h2>
          )}

          <h2>Atik: {this.state.atik}</h2>
        </div>
      </div>
    );
  }
}
export default Weather;
