import React from "react";
import "./Card.css";
const Card = () => {
  return (
    <div>
      <p className="green-line"> </p>

      <div className="cards">
        <div className="card ">
          <div className="card-body">
            <p className="card-icon icon-1">A</p>
            <h3 className="h3">Brand Recognition</h3>
            <p className="card-text">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <div className="card card2">
          <div className="card-body">
            <p className="card-icon icon-2">A</p>
            <h3>Detailed Records</h3>
            <p className="card-text">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className="card card3">
          <div className="card-body">
            <p className="card-icon icon-2">A</p>
            <h3>Fully Customizable</h3>
            <p className="card-text">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
