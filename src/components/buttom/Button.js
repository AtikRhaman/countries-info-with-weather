import React from "react";
import "../../scss/main.scss";

const Button = props => {
  return (
    <div className="button button--secoundary button-active" id="sort-by-name">
      {props.name}
    </div>
  );
};

export default Button;
