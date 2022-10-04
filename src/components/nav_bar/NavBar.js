import Points from './points/Points';
import './NavBar.css'

export default function NavBar({switch_function, active_item}) {
    return(
        <div className="nav-bar">
            <li onClick={() => {
                switch_function('portfolio')
            }} className={active_item === 'portfolio' ? 'active' : 'no-active'}>Portfolio</li>
            <li onClick={() => {
                switch_function('market')
            }} className={active_item === 'market' ? 'active' : 'no-active'}>Market</li>
            <li className='points'><Points/></li>
        </div>
    );
}