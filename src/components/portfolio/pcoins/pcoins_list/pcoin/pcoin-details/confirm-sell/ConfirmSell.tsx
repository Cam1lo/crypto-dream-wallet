import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import "./ConfirmSell.css";
import React from "react";
import { useSelector } from "react-redux";
import { IPortfolioCoin } from "../../../../../../../models/IPortfolioCoin";

type Props = {
  pcoin: IPortfolioCoin;
  value: number;
  onChange: Function;
};

export default function ConfirmSell({ pcoin, value, onChange }: Props) {
  const [coin_buying, set_coin_buying] = useState(true);
  const user_points = useSelector((state: any) => state.user.points);

  const buying_with = () =>
    coin_buying ? (
      <FontAwesomeIcon
        size="1x"
        className="confirm-points-icon"
        color="#000"
        icon={faCoins}
      />
    ) : (
      <img className={"crypto-coin-icon"} src={pcoin.coin.iconUrl} />
    );

  return (
    <div className="confirm-sell-element-container">
      <div onClick={() => set_coin_buying(!coin_buying)}>{buying_with()}</div>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="amount"
        type="number"
        min={1}
        max={user_points}
      />
    </div>
  );
}
