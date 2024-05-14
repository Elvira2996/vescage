
import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import {Link} from 'react-router-dom'
import Category1 from '../../images/AH1.jpg'
import Category2 from '../../images/CM1.jpg'

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
                <li><Link to="#">Home & Lifestyle</Link></li>
                <li><Link to="#">Children</Link></li>
                <li><Link to="#">Jeans Couture</Link></li>
                <li><Link to="#">Gifts</Link></li>
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
        <section className="about">
  <div className="video-container">
    <iframe className="video" src="https://www.youtube.com/watch?v=0le6mX3NHVY" frameborder="0" allowfullscreen title='sdf'></iframe>
    <h1 className="video-title">La Vacanza 2024</h1>
    <div className="buttons">
      <button className="btn_about">Shop women's</button>
      <button className="btn_about">Discover More</button>
    </div>
  </div>
</section>
<section className="category">
  <div className="category-wrapper flex">
    <div className="category-item">
      <img src={Category1} alt=""/>
      <div className='overlay'>
      <h2>Title 1</h2>
      <p><Link to="#">Explore More</Link></p>
    </div>
    </div>
    <div className="category-item">
      <img src={Category2} alt=""/>
      <div className='overlay'>
      <h2>Title 2</h2>
      <p><Link to="#">Explore More</Link></p>
    </div>
    </div>
  </div>
</section>

<section class="gallery">
  <div class="gallery-wrapper flex">
    <div class="gallery-item">
      <img src="image1.jpg" alt=""/>
      <p class="gallery-txt"><Link to="#">Explore More 1</Link></p>
    </div>
    <div class="gallery-item">
      <img src="image2.jpg" alt=""/>
      <p class="gallery-txt"><Link to="#">Explore More 2</Link></p>
    </div>
    <div class="gallery-item">
      <img src="image3.jpg" alt=""/>
      <p class="gallery-txt"><Link to="#">Explore More 3</Link></p>
    </div>
    <div class="gallery-item">
      <img src="image4.jpg" alt=""/>
      <p class="gallery-txt"><Link to="#">Explore More 4</Link></p>
    </div>
  </div>
  <div class="arrow-wrapper">
    <div class="arrow left"></div>
    <div class="arrow right"></div>
  </div>
</section>
      </div>
    </header>
    </>
  );
}

export default Header;

