import React, { Component } from "react";
// import Button from "../buttom/Button";

class FormInput extends Component {
  state = {
    search: ""
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.search);
  };

  // startWithAnyWord = countries.filter(
  //   country =>
  //     country.name.toLowerCase().startsWith(inputName.toLowerCase()) ||
  //     country.capital.toLowerCase().startsWith(inputName.toLowerCase())
  // );

  render() {
    // console.log(this.state.search);
    return (
      <div className="App">
        <h1>React Form</h1>
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
          {/* <Button name="Submmit" /> */}
          <button>Search</button>
        </form>
      </div>
    );
  }
}

// const FormInput = () => {
//   return (
//     <div className="search">
//       <div className="search__item">
//         <input
//           type="text"
//           id="input_country_name"
//           placeholder="Serch country name"
//         />
//       </div>
//     </div>
//   );
// };
export default FormInput;
