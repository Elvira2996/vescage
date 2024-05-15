
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
                <li><Link to="#">La Vacanza</Link></li>
                <li><Link to="#">New In</Link></li>
                <li><Link to="#">Bags</Link></li>
                <li><Link to="#">Woman</Link></li>
                <li><Link to="#">Men</Link></li>
                <li><Link to="#">Children</Link></li>
                <li><Link to="#">Stories</Link></li>
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

