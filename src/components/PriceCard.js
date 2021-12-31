import React from "react";
import CardItem from "./CardItem";
import TextItem from "./Text";

const PricingImg = {
  SingleExposure: "images/SingleExposure-min.jpg",
  LightsOn: "images/LightsOn-min.jpg",
  ItemRemoval: "images/ItemRemoval-min.jpg",
  HDR: "images/HDR-min.jpg",
  DayToDusk: "images/DayToDusk-min.jpg",
  ColorChange: "images/ColorChange-min.jpg",
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
            "Our photo retouch service turns your dull exterior property photo to  a beautiful dusk setting by replacing the sky that gives you the feel of sunset."
          }
          price={"US $ 3.00 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.ItemRemoval} />
        <TextItem
          header={"ITEM REMOVAL"}
          desc={
            "Our photo editing team cam remove unnecessary objects out from you photos."
          }
          price={"US $ 3.00 - $ 6.00 / IMAGE"}
        />
      </ul>
      <ul className="cards__items_pricing">
        <CardItem src={PricingImg.LightsOn} />
        <TextItem
          header={"Lights On"}
          desc={
            "Here in Editing Factory we can enhance your portrait photos, remove fine lines to have cleaner portraits for your corporate photos."
          }
          price={"US $ 2.00 / IMAGE"}
        />
      </ul>
    </div>
  );
}

export default PriceCard;
