import React from "react";

export default function NasaImg(props) {
  return (
    <div className="nasa-photo-of-the-day">
      <img src={props.url} />
      <h4>{props.copyright}</h4>
    </div>
  );
}
