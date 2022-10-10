import Points from './points/Points';
import './NavBar.css'
import React from 'react';

type Props = {
    switch_function: Function,
    active_page_name: string
}

export default function NavBar({switch_function, active_page_name}: Props) {
    return(
        <div className="nav-bar">
            <li onClick={() => {
                switch_function('portfolio')
            }} className={active_page_name === 'portfolio' ? 'active' : 'no-active'}>Portfolio</li>
            <li onClick={() => {
                switch_function('market')
            }} className={active_page_name === 'market' ? 'active' : 'no-active'}>Market</li>
            <li className='points'><Points/></li>
        </div>
    );
}