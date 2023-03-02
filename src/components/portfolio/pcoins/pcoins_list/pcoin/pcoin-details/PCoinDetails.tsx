import React, { useState } from "react";
import { IPortfolioCoin } from "../../../../../../models/IPortfolioCoin";
import "./PCoinDetails.css";
import PTransactionList from "./ptranscations-list/ptransaction-list";
import "./PCoinDetails.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import StateProvider from "../../../../../../services/StateProvider";
import ConfirmSell from "./confirm-sell/ConfirmSell";

export default function PCoinDetails({ pcoin }: { pcoin: IPortfolioCoin }) {
  const [selling, set_selling] = useState(false);
  const [selling_amount, set_selling_amount] = useState(1);
  const user_points = useSelector((state: any) => state.user.points);

  const sellingBtnClick = () => {
    if (!selling) set_selling(true);
    else {
      if (selling_amount < 0) {
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
      } else if (pcoin.amount < selling_amount) {
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
        StateProvider.sell(pcoin.coin.uuid, selling_amount);
        set_selling(false);
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
    <>
      <PTransactionList pcoin={pcoin} />
      <div className="sell-container" onClick={(e) => e.stopPropagation()}>
        <div>
          <div className="confirm-sell-container">
            {selling ? (
              <ConfirmSell
                value={selling_amount}
                onChange={set_selling_amount}
                pcoin={pcoin}
              />
            ) : null}
          </div>
          <div
            className={selling ? "buy-btn green-btn" : "buy-btn"}
            onClick={() => sellingBtnClick()}
          >
            {selling ? "Confirm Sell" : "Sell"}
          </div>
        </div>
      </div>
    </>
  );
}
