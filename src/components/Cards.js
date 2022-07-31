import React from "react";
import "./Cards.scss";

function Cards(props) {
  return (
    <div className="cards">
      <div className="cards-title">
        <div className="cards-icon">{props.icon}</div>
        <div className="cards-text">
          <div className="cards-main">{props.main}</div>
          <div className="cards-sub">{props.sub}</div>
        </div>
      </div>
      <div className="cards-description">{props.description}</div>
    </div>
  );
}

export default Cards;
