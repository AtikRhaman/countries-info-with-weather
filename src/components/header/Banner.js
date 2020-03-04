import React from "react";
import "./banner.scss";
import InputPanel from "../form/FormContainer";

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner__title">{"World countries Info and Weather"}</h1>
      <div className="total-country">
        <h2 className="banner__title--subtitle">
          {"Numbers of countries in the world:"}
        </h2>
        {/* <h2 className="result" id="number-of-countries">
          {"Search Result"}
        </h2> */}
        <InputPanel />
      </div>
    </div>
  );
};
export default Banner;
