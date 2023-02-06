import { useEffect, useState } from "react";
import "./App.css";
import Market from "../market/Market";
import GetMoreCoins from "./get-more-coins/GetMoreCoins";
import NavBar from "../nav-bar/NavBar";
import Portfolio from "../portfolio/Portfolio";
import React from "react";
import { useConfig } from "../../services/CustomHooks";

function App() {
  const [active_page, set_active_page] = useState<string>("portfolio");
  const loading = useConfig();

  const switch_screen = (pagename: string) => {
    set_active_page(pagename);
  };

  function active_page_fun() {
    if (active_page === "portfolio") {
      return (
        <Portfolio
          goToMarket={() => {
            switch_screen("market");
          }}
        />
      );
    }
    if (active_page === "market") {
      return <Market />;
    }
  }

  return (
    <>
      {loading ? (
        <div>LOADING</div>
      ) : (
        <div className="App-wrapper">
          <GetMoreCoins />
          <div className="App">
            <NavBar
              switch_function={switch_screen}
              active_page_name={active_page}
            />
            {active_page_fun()}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
