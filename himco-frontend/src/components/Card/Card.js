import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ id, title, image }) => {
  const navigate = useNavigate();

  return (
    <div className="card fade-in">
      <img src={image} alt={title} className="card-img" />
      <p className="card-title">{title}</p>
      <button className="view-btn" onClick={() => navigate(`/gallery/${id}`)}>
        View All
      </button>
    </div>
  );
};

export default Card;



