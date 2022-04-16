import React from "react";
import { Link } from "react-router-dom";

function TextItem(props) {
  return (
    <>
      <li className="cards__item_text">
        <h2>{props.header}</h2>
        <br />
        <h2>{props.desc}</h2>
        <br />
        <h2>{props.price}</h2>
      </li>
    </>
  );
}

export default TextItem;
