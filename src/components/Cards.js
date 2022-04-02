import React, { useEffect, useState } from "react";
import "./Cards.css";
import MainCardItem from "./MainCardItem";
import BeforeAfter from "./BeforeAfter";
import Collective from "./Collective";
const ImgData = [
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/SingleExposure-min.jpg",
    text: "Single Exposure",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/LightsOn-min.jpg",
    text: "Lights On",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/ItemRemoval-min.jpg",
    text: "Item Removal",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/HDR-min.jpg",
    text: "HDR",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/DayToDusk-min.jpg",
    text: "Day to Dusk",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/ColorChange-min.jpg",
    text: "Color Change",
  },
  {
    url: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/360-min.jpg",
    text: "360°",
  },
];

const befAftImage = {
  color: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/Color/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/Color/Before-min.jpeg",
  },
  dayToDusk: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/DayToDusk/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/DayToDusk/Before-min.jpg",
  },
  hdr: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/HDR/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/HDR/Before-min.jpg",
    after2:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/HDR/After_2-min.jpg",
    before2:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/HDR/Before_2-min.jpg",
  },
  itemRemoval: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/ItemRemoval/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/ItemRemoval/Before-min.jpeg",
  },
  lights: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/Lights/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/Lights/Before-min.jpeg",
  },
  Threesixty: {
    after:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/360/After-min.jpg",
    before:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/360/Before-min.jpg",
    after2:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/360/After_2-min.jpg",
    before2:
      "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/BF-AF/360/Before_2-min.jpg",
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
              />
            </ul>
          </div>
        </div>
        <div>
          <h1>Before and After</h1>
        </div>

        <div className="cards__container_BAF">
          <div className="cards__wrapper_BAF">
            <h2>Color Changes</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.color.after}
                before={befAftImage.color.before}
                label="Color Change"
              />
            </ul>
            <h2>Day To Dusk</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.dayToDusk.after}
                before={befAftImage.dayToDusk.before}
                label="DayToDusk"
              />
            </ul>
            <h2>Item Removal</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.itemRemoval.after}
                before={befAftImage.itemRemoval.before}
                label="ItemRemoval"
              />
            </ul>
            <h2>Lights On</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.lights.after}
                before={befAftImage.lights.before}
                label="Lights"
              />
            </ul>
            <h2>360°</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.Threesixty.after}
                before={befAftImage.Threesixty.before}
                label="360"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.Threesixty.after2}
                before={befAftImage.Threesixty.before2}
                label="360"
              />
            </ul>
            <h2>HDR</h2>
            <br />
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.hdr.after}
                before={befAftImage.hdr.before}
                label="HDR"
              />
            </ul>
            <ul className="cards__items_BAF">
              <BeforeAfter
                after={befAftImage.hdr.after2}
                before={befAftImage.hdr.before2}
                label="HDR"
              />
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
