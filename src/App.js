import React from "react";
import "./App.scss";
import "./App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/footer";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="App">
      <Header />
      <Weather />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
