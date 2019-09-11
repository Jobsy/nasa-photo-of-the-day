import React, { useState, useEffect } from "react";
import axios from 'axios';
import HomePage from "./component";
import {Header} from "./components/header";
import {Body} from "./components/body";
import "./App.css";


function App() {
  // debugger





  // function App() {
  const [data, setData] = useState({ hits: [] });
  // const [query, setQuery] = useState("react");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
          setData(res.data);
          console.log(res.data)
        }
        );
    };

    fetchData();
  }, []);
  // debugger
  return (
    <>
      <ul>
        <Header headerAndTitle = {data.title}/>
        {/* <h2></h2> */}
        {/* <img  /> */}
        <Body imgSrc={data.url} paragraph={data.explanation} />
        <h4>{data.copyright}</h4>
        <h3>{data.date}</h3>
      </ul>
    </>
  );
  // }

  // return (
  //   <div className="App">
  //     <p>
  //       Read through the instructions in the README.md file to build your NASA
  //       app! Have fun 🚀!
  //     </p>
  //     <HomePage pageTitle = {"title"} imgSrc =  {"image source"}/>
  //   </div>
  // );
}

export default App;
