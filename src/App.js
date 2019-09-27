import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaImg from "./Components/NasaImg.js";
import ImgInfo from "./Components/ImgInfo.js";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const nasaListItems = await axios.get(
          "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-09-26"
        );
        console.log(nasaListItems);
        setNasa(nasaListItems.data);
      } catch (err) {
        console.log(err);
      } //try block end
    } // end of fechData()

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1></h1>
      <div>
        <NasaImg
          className="nasa-photo-of-the-day"
          url={nasa.url}
          copyright={nasa.copyright}
        />
        <ImgInfo
          className="nasa-info"
          title={nasa.title}
          date={nasa.date}
          explanation={nasa.explanation}
        />
      </div>
    </div>
  );
}

export default App;
