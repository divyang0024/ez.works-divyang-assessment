import React from "react";
import "../styles/index.css";
import BannerForm from "./BannerForm";
import BannerCards from "./BannerCards";

const cardData = [
  {
    img: "./Research@4x-1@2x.png",
    title: "Presentation Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
  {
    img: "./Research@4x-2@2x.png",
    title: "Audio - Visual Production",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
  {
    img: "./Research@4x-3@2x.png",
    title: "Translation Services",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
  {
    img: "./Research@4x-4@2x.png",
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
  {
    img: "./Research@4x-5@2x.png",
    title: "Research & Analytics",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
  {
    img: "./Research@4x@2x.png",
    title: "Data Processing",
    description:
      "Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet",
  },
];

const Home = () => {
  return (
    <div className="main-container">
      <div className="content-container">
        <BannerForm />
        <div className="banner-card-grid">
          {cardData.map((card, index) => (
            <BannerCards
              key={index}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
