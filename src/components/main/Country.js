import React, { Component } from "react";
import "../../scss/main.scss";

class Country extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      name: "",
      capital: ""
    };
  }

  componentDidMount() {
    // fatching countries API
    let url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then(response => response.json())
      .then(countries => {
        this.setState({
          countries: countries
        });
      });
  }
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    console.log(this.state.countries);
    const { countries } = this.state;
    const countryList = countries.map((country, i) => (
      <div className="country" key={country.name}>
        <img src={country.flag} alt={country.name + "flag"} />
        <h2>{country.name}</h2>
        <p>Capital : {country.capital}</p>
        <p>Population : {country.population}</p>
        <p>Region : {country.region}</p>
        <p>Languages : {country.language}</p>
      </div>
    ));
    return <div className="country_container">{countryList}</div>;
  }
}
export default Country;
