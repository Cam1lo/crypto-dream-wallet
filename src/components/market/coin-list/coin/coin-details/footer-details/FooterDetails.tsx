import { MouseEventHandler, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Utils } from "../../../../../../services/Utils";
import ReactTooltip from "react-tooltip";
import "./FooterDetails.css";
import ConfirmBuy from "./confirm-buy/ConfirmBuy";
import { ICoin } from "../../../../../../models/ICoin";
import React from "react";
import StateProvider from "../../../../../../services/StateProvider";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";

export default function FooterDetails({ coin }: { coin: ICoin }) {
  const [buying, set_buying] = useState(false);
  const [spending, set_spending] = useState(1);
  const openExternalLink = () => window.open(coin.coinrankingUrl);
  const user_points = useSelector((state: any) => state.user.points);
  const handleClick: MouseEventHandler<HTMLDivElement> = (event): void =>
    event.stopPropagation();

  const buyingBtnClick = () => {
    if (!buying) set_buying(true);
    else {
      if (spending < 0) {
        toast.warning("Amount must be greater than 0", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else if (user_points < spending) {
        toast.error("Not enoght point to purchase", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        StateProvider.buy(coin.uuid, spending);
        set_buying(false);
        toast.success("Coin added to portfolio", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    }
  };

  return (
    <div className="footer-details" onClick={handleClick}>
      <div className="stats">
        <div className="stat">
          <div>
            <FontAwesomeIcon className="stat-icon" icon={faChartSimple} />
            <span>Volume</span>
          </div>
          <span>{`$ ${Utils.format_number(coin["24hVolume"])}`}</span>
        </div>
        <div className="stat">
          <div>
            <FontAwesomeIcon className="stat-icon" icon={faChartPie} />
            <span>Market Cap</span>
          </div>
          <span>{`$ ${Utils.format_number(coin.marketCap)}`}</span>
        </div>
      </div>
      <div className="stats-right">
        <div className="confirm-buy-container">
          {buying ? (
            <ConfirmBuy value={spending} onChange={set_spending} coin={coin} />
          ) : null}
        </div>
        <div
          className={buying ? "buy-btn green-btn" : "buy-btn"}
          onClick={buyingBtnClick}
        >
          {buying ? "Confirm Buy" : "Buy"}
        </div>
        <FontAwesomeIcon
          onClick={openExternalLink}
          data-tip="Full Details"
          className="external-icon"
          icon={faArrowUpRightFromSquare}
        />
      </div>
      <ReactTooltip place="top" type="dark" effect="float" />
    </div>
  );
}
