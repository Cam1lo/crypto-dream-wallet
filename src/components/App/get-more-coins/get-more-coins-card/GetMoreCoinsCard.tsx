/* eslint-disable jsx-a11y/alt-text */
import coinsFalling from "../../../../assets/coinsFalling.png";
import cursor from "../../../../assets/cursor.png";
import React from "react";
import "./GetMoreCoinsCard.css";
import StateProvider from "../../../../services/StateProvider";

function GetMoreCoinsCard() {
  function get_coins_button_clicked(amount: number) {
    StateProvider.ear_poins(amount);
  }

  return (
    <div className="get-more-coins-card">
      <div className="get-more-coins-card-header">Free</div>
      <div className="get-more-coins-card-column">
        <div className="get-more-coins-card-price">
          <span className="dollar-sign">$</span>
          <span>0</span>
        </div>
        <div className="get-more-coins-card-icon">
          <img src={coinsFalling} />
        </div>
      </div>
      <div className="get-more-coins-card-body">
        <ul>
          <li>One point per click</li>
          <li>Tap the button to get points.</li>
          <li>As much as you want</li>
        </ul>
      </div>
      <div className="get-more-coins-card-footer">
        <div
          className="get-more-coins-checkout-button"
          onClick={() => get_coins_button_clicked(1)}
        >
          <img src={cursor} />
          <span>Get Points</span>
        </div>
      </div>
    </div>
  );
}

export default GetMoreCoinsCard;
