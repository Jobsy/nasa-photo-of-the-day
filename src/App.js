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
        })
        .catch(error => {
          setData(error.response.status)
        })
    };
    fetchData();
  }, [query]);

  return (
    <>
      {/* <input value={query} onChange={e => setQuery(e.target.value)} /> */}
      <div className="wrapper">
        <h1 className="">Astronomy Picture of the Day</h1>
        <Header headerTitleAndInput={data.title} error={data} query={query} setQuery={e => setQuery(e.target.value)}/>
        <Body imgSrc={data.url} paragraph={data.explanation} />
        <Footer footerCopyright={data.copyright} footerDate={data.date} />
      </div>
    </>
  );
  // }
}

export default App;
