import { useState } from 'react';
import './App.css';
import Market from '../market/Market';
import NavBar from '../nav_bar/NavBar';
import Portfolio from '../portfolio/Portfolio';
import test from '../../test/test';
import { useEffect } from 'react';

function App() {
  const [active_page, set_active_page] = useState('portfolio')

  const switch_screen = (page) => {
    set_active_page(page)
  }

  function active_page_fun() {
    if(active_page === 'portfolio') {
      return <Portfolio goToMarket={() => {
        switch_screen('market')
      }}/>
    } if (active_page === 'market') {
      return <Market/>
    }
  }

  useEffect(() => {
    test();
  })

  return (
    <div className="App">
      {/* <div className='corner-dot'/>
      <NavBar switch_function={switch_screen} active_item={active_page}/>
      {active_page_fun()} */}
    </div>
  );
}

export default App;
