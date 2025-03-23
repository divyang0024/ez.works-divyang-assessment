import React from "react";
import "../styles/bannercard.css";

const BannerCards = ({ title, description, img }) => {
  return (
    <div className="banner-card">
      <div className="banner-card-heading">
        <img className="card-icon" src={img} alt="card-icon" />
        <h1 className="text-[#3CC3F2]">{title}</h1>
      </div>
      <div className="banner-card-content">{description}</div>
    </div>
  );
};

export default BannerCards;
