import React from "react";
import { Link } from "react-router-dom";

function TextItem(props) {
  return (
    <>
      <li className="cards__item_text">
        <h2>{props.header}</h2>
        <br />
        <h3 >{props.desc}</h3>
        <br />
        <p>{props.price}</p>
      </li>
    </>
  );
}

export default TextItem;
