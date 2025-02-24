import React from "react";
import Swiper from "../../components/swiper/Swiper";

const HeroBanner = () => {
  return (
    <>
      <div className="heroBanner">
        <div className="container">
          <div className="homeSec">
            <div className="leftSec">
              <div className="textOrange">100% Organic Foods</div>
              <div className="textGreen">Organic Veggies & Fruits Foods</div>
            </div>
            <div className="rightSec">
              <Swiper />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
