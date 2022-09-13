import { useState, useEffect } from 'react';
import './App.css';
import get_coins from '../../services/api';
import CoinList from '../coin_list/CoinList'
import NavBar from '../nav_bar/NavBar'
import Portfolio from '../portfolio/Portfolio';

function App() {

  const [coins, set_coins] = useState([])
  const [active_page, set_active_page] = useState('portfolio')

  useEffect(() => {
    async function fetch_coins() {
      const data = await get_coins()
      set_coins(data.data.coins)
    }
    fetch_coins()
  }, []);

  const switch_screen = (page) => {
    set_active_page(page)
  }

  function active_page_fun() {
    if(active_page === 'portfolio') {
      return <Portfolio goToMarket={() => {
        switch_screen('market')
      }}/>
    } else return <CoinList coins={coins}/>
  }

  return (
    <div className="App">
      <div className='corner-dot'/>
      <NavBar switch_function={switch_screen} active_item={active_page}/>
      {active_page_fun()}
    </div>
  );
}

export default App;
