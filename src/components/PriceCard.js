import React from "react";
import CardItem from "./CardItem";
import TextItem from "./Text";

const PricingImg = {
  SingleExposure:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/SingleExposure-min.jpg",
  LightsOn:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/LightsOn-min.jpg",
  ItemRemoval:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/ItemRemoval-min.jpg",
  HDR: "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/HDR-min.jpg",
  DayToDusk:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/DayToDusk-min.jpg",
  ColorChange:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/ColorChange-min.jpg",
  Threesixty:
    "https://pixelperfectimage.s3.ap-south-1.amazonaws.com/images/Mainscreen/360-min.jpg",
};

function PriceCard(props) {
  return (
    <div className="cards">
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.HDR} />
        <TextItem
          header={"HDR"}
          desc={
            "Ideal for real estate photo editing so you can put up you listing with a top-grade, retouched professional looking photographs."
          }
          price={"US $ 1.50 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.DayToDusk} />
        <TextItem
          header={"DAY TO DUSK"}
          desc={
            "Our photo retouch service turns your dull exterior property photo to a beautiful dusk setting by replacing the sky that gives you the feel of sunset."
          }
          price={"US $ 3/ IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.SingleExposure} />
        <TextItem
          header={"Single Exposure"}
          desc={
            "Our team of professional editors work on series of images simultaneously to provide the best image with proper colors and tones"
          }
          price={"US $ 1 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.ItemRemoval} />
        <TextItem
          header={"ITEM REMOVAL"}
          desc={
            "Our photo editing team can remove unnecessary objects out from your photos."
          }
          price={"US $ 5 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.LightsOn} />
        <TextItem
          header={"Lights On"}
          desc={
            "Here in Pixel Perfect we can enhance your portrait photos, remove fine lines to have cleaner portraits for your corporate photos."
          }
          price={"US $ 0.5 - 0.8 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.ColorChange} />
        <TextItem
          header={"Color Change"}
          desc={
            "Our photo editing team can change interior object colors for your indoor photos."
          }
          price={"US $ 1.50 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.Threesixty} />
        <TextItem
          header={"360°"}
          desc={"Removal of tripod and image enhancement"}
          price={"US $ 3 / IMAGE"}
        />
      </ul>
    </div>
  );
}

export default PriceCard;
