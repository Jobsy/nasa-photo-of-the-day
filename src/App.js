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

  return (
    <>
      <ul>
        <Header headerAndTitle={data.title} />
        <Body imgSrc={data.url} paragraph={data.explanation} />
        <Footer footerCopyright={data.copyright} footerDate={data.date} />
      </ul>
    </>
  );

}

export default App;
