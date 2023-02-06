import React, { useState } from "react";
import GetMoreCoinsCard from "./get-more-coins-card/GetMoreCoinsCard";
import "./GetMoreCoins.css";

function GetMoreCoins() {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      <div className={hover ? "extended corner-dot" : "corner-dot"}></div>
      <div className={hover ? "get-more-coins-container" : "hide"}>
        <GetMoreCoinsCard />
      </div>
    </div>
  );
}

export default GetMoreCoins;
