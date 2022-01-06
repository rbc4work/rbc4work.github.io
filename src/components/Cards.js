import React, { useEffect, useState } from "react";
import "./Cards.css";
import MainCardItem from "./MainCardItem";
import BeforeAfter from "./BeforeAfter";
const ImgData = [
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/SingleExposure-min.jpg",
    text: "Single Exposure",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/LightsOn-min.jpg",
    text: "Lights On",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/ItemRemoval-min.jpg",
    text: "Item Removal",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/HDR-min.jpg",
    text: "HDR",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/DayToDusk-min.jpg",
    text: "Day to Dusk",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/ColorChange-min.jpg",
    text: "Color Change",
  },
];

const befAftImage = {
  color: {
    after: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Color/After-min.jpg",
    before: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Color/Before-min.jpeg",
  },
  dayToDusk: {
    after: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/DayToDusk/After-min.jpg",
    before: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/DayToDusk/Before-min.jpg",
  },
  hdr: {
    after: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/HDR/After-min.jpg",
    before: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/HDR/Before-min.jpg",
  },
  itemRemoval: {
    after: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/ItemRemoval/After-min.jpg",
    before: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/ItemRemoval/Before-min.jpeg",
  },
  lights: {
    after: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Lights/After-min.jpg",
    before: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Lights/Before-min.jpeg",
  },
};

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.switchImage = this.switchImage.bind(this);
    this.state = {
      currentImage: 0,
      images: ImgData,
    };
  }

  switchImage() {
    if (this.state.currentImage < this.state.images.length - 1) {
      this.setState({
        currentImage: this.state.currentImage + 1,
      });
    } else {
      this.setState({
        currentImage: 0,
      });
    }
    return this.currentImage;
  }

  componentDidMount() {
    setInterval(this.switchImage, 5000);
  }
  render() {
    return (
      <div className="cards">
        <h1>Professional Photo Editing Services</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <MainCardItem
                src={this.state.images[this.state.currentImage].url}
                text={this.state.images[this.state.currentImage].text}
                label="Editing"
                path="/pricing"
              />
            </ul>
          </div>
        </div>
        <div>
          <h1>Before and After</h1>
        </div>
        <div className="cards__container_BAF">
          <div className="cards__wrapper_BAF">
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.color.after}
                before={befAftImage.color.before}
                label="Color Change"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.dayToDusk.after}
                before={befAftImage.dayToDusk.before}
                label="DayToDusk"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.hdr.after}
                before={befAftImage.hdr.before}
                label="HDR"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.itemRemoval.after}
                before={befAftImage.itemRemoval.before}
                label="ItemRemoval"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.lights.after}
                before={befAftImage.lights.before}
                label="Lights"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
