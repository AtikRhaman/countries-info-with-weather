import React from "react";
import "../../scss/main.scss";
import Country from "./Country";

const CountriesList = () => {
  return (
    <section>
      <div className="container">
        <div className="country_container">
          <Country />
        </div>
      </div>
    </section>
  );
};
export default CountriesList;
