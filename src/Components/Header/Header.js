
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
        <section className="about">
  <div className="video-container">
    <iframe className="video" src="https://www.youtube.com/watch?v=0le6mX3NHVY" frameborder="0" allowfullscreen></iframe>
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
      <img src={Category1} alt="Image 1"/>
      <div className='overlay'>
      <h2>Title 1</h2>
      <p><a href="#">Explore More</a></p>
    </div>
    </div>
    <div className="category-item">
      <img src={Category2} alt="Image 2"/>
      <div className='overlay'>
      <h2>Title 2</h2>
      <p><a href="#">Explore More</a></p>
    </div>
    </div>
  </div>
</section>

<section class="gallery">
  <div class="gallery-wrapper flex">
    <div class="gallery-item">
      <img src="image1.jpg" alt="Image 1"/>
      <p class="gallery-txt"><a href="#">Explore More 1</a></p>
    </div>
    <div class="gallery-item">
      <img src="image2.jpg" alt="Image 2"/>
      <p class="gallery-txt"><a href="#">Explore More 2</a></p>
    </div>
    <div class="gallery-item">
      <img src="image3.jpg" alt="Image 3"/>
      <p class="gallery-txt"><a href="#">Explore More 3</a></p>
    </div>
    <div class="gallery-item">
      <img src="image4.jpg" alt="Image 4"/>
      <p class="gallery-txt"><a href="#">Explore More 4</a></p>
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

