import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import "./App.css";

//       Read through the instructions in the README.md file to build your NASA
//       app! Have fun 🚀!

// function App() {
//   // Initialize state to hold the image URL
//   const [dogPic, setDogPic] = useState("");
//   useEffect(() => {
//     // This axios GET request will return a single image
//     axios
//       .get("https://dog.ceo/api/breeds/image/random")
//       // Which we then set to state
//       .then(res => setDogPic(res.data.message))
//       // Always include error handling
//       .catch(err => console.log(err));
//   }, []);

//   return (
//     <div className="App">
//       <h1 className="App-header">We Love Puppers</h1>
//       <img src={dogPic} alt="a random dog" />
//       <input />
//     </div>
//   );
// }

function App() {

  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("2019-09-11");
  
  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://api.nasa.gov/plantary/apod?api_key=DEMO_KEY&date=" + query)
        .then(res => {
          setData(res.data);
        }
        )
        .catch(error => {
          setData(error.response.status)
        })
    };
    fetchData();
  }, [query]);

  return (
    <>
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        <h1 className="App-header">Astronomy Picture of the Day</h1>
        <Header headerAndTitle={data.title} error={data} />
        <Body imgSrc={data.url} paragraph={data.explanation} />
        <Footer footerCopyright={data.copyright} footerDate={data.date} />
      </ul>
    </>
  );
  // }
}

export default App;
