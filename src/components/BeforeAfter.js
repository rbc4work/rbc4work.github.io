import React from "react";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function BeforeAfter(props) {
  return (
    <>
      <li className="cards__item">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage src={props.before} alt="Image one" />
          }
          itemTwo={
            <ReactCompareSliderImage src={props.after} alt="Image two" />
          }
        />
      </li>
    </>
  );
}

export default BeforeAfter;
