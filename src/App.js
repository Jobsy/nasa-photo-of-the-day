import React from "react";
import HomePage from "./components";
import "./App.css";

function App() {
  // debugger
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <HomePage pageTitle = {"title"} imgSrc =  {"image source"}/>
    </div>
  );
}

export default App;
