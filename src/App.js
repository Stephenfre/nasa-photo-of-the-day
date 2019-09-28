import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import NasaImg from "./Components/NasaImg.js";
import ImgInfo from "./Components/ImgInfo.js";
import Buttons from "./Components/Buttons.js";
import { Container, Row } from "reactstrap";
import "./App.css";

function App() {
  let today = moment().format("YYYY-MM-DD");

  const [nasa, setNasa] = useState([]);
  const [date, setDate] = useState(today);

  useEffect(() => {
    let url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`;
    async function fetchData() {
      try {
        const nasaListItems = await axios.get(`${url}`);
        console.log(nasaListItems);
        setNasa(nasaListItems.data);
      } catch (err) {
        console.log(err);
      } //try block end
    } // end of fechData()

    fetchData();
  }, [date]);

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=DEMO_KEY`)
  //     .then(response => {
  //       const nasaListItems = response.data.data;
  //       console.log(nasaListItems);
  //       setNasa(nasaListItems);
  //     })
  //     .catch(err => {
  //       console.log("Sorry no IMG", err);
  //     });
  // }, [date]);

  return (
    <Container>
      <div className="App">
        <NasaImg
          className="nasa-photo-of-the-day"
          url={nasa.url}
          copyright={nasa.copyright}
        />
        <Buttons
          onClick={() =>
            setDate(
              moment(date)
                .subtract(1, "d")
                .format("YYYY-MM-DD")
            )
          }
          type="primary"
        >
          Previous
        </Buttons>
        <Buttons
          onClick={() =>
            setDate(
              moment(date)
                .add(1, "d")
                .format("YYYY-MM-DD")
            )
          }
          type="secondary"
        >
          Next
        </Buttons>
        <ImgInfo
          className="nasa-info"
          title={nasa.title}
          date={nasa.date}
          explanation={nasa.explanation}
        />
      </div>
    </Container>
  );
}

export default App;
