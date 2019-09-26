import React from "react";

export default function NasaInfo(props) {
  return (
    <div className="nasa-info" key={props.id}>
      <h1>{props.title}</h1>
      <h3>{props.date}</h3>
      <p>{props.explanation}</p>
    </div>
  );
}
