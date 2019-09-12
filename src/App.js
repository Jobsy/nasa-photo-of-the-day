import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import "./App.css";

//       Read through the instructions in the README.md file to build your NASA
//       app! Have fun 🚀!

function App() {

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("2019-09-11");

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=" + query)
        .then(res => {
          setData(res.data);
        }
        );
    };
    fetchData();
  }, [query]);


  // if (!data) {
  //   return <h3>Loading...</h3>;
  // }
  // else {
  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        <h1>Astronomy Picture of the Day</h1>
        <Header headerAndTitle={data.title} />
        <Body imgSrc={data.url} paragraph={data.explanation} />
        <Footer footerCopyright={data.copyright} footerDate={data.date} />
      </ul>
    </>
  );
  // }
}

export default App;
