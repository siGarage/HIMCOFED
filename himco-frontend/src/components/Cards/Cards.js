import React from "react";
import Card from "../Card/Card";
import "./Cards.css";
import cardData from "../data/cardData";

const Cards = () => {
  return (
    <div className="cards-section">
      <h2 className="cards-heading">Gallery</h2>
      <div className="marquee-container">
        <div className="marquee-track">
          {cardData.concat(cardData).map((data, index) => (
            <Card key={index} id={data.id} title={data.title} image={data.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;




