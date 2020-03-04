import React from "react";
import "./formContainer.scss";
import "../../scss/main.scss";
import FormInput from "./FormInput";
import Button from "../buttom/Button";

const InputPanel = () => {
  return (
    <div className="banner-input-container">
      <FormInput />
      <Button name={"Search"} />
      <div className="search-result">
        {/* <h2 className="search-result__text">Search result:</h2> */}
        {/* <h2 className="search-result__result" id="search-in-numbers">
          {"Search Result"}
        </h2> */}
      </div>
    </div>
  );
};
export default InputPanel;
