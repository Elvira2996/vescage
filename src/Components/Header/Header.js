
import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';

import {Link} from 'react-router-dom'

function Header() {
  return (
    <>
    <header className="Header">
      <div className="container">
        <div className="Head flex">
        
        <div className="logo">Versage</div>
        <nav>
            <ul className='header_menu flex'>
                <li><a href="#">La Vacanza</a></li>
                <li><a href="#">New In</a></li>
                <li><a href="#">Bags</a></li>
                <li><a href="#">Woman</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Home & Lifestyle</a></li>
                <li><a href="#">Children</a></li>
                <li><a href="#">Jeans Couture</a></li>
                <li><a href="#">Gifts</a></li>
                <li><a href="#">Stories</a></li>
            </ul>
        </nav>
        <div className="icons">
            <span className='ic_menu'></span>
            <span className='ic_menu'></span>
            <span className='ic_menu'></span>
        </div>
  
          
          <Menu />
          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;

