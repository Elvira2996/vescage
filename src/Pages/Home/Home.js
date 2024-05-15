import './Home.css';
import Category1 from '../../images/AH1.jpg'
import Category2 from '../../images/CM1.jpg'
import video from '../../images/video.mp4'
import {Link} from 'react-router-dom'	

function Home() {
	return (
		<>
		 <section className="about">
  <div className="video-container">
    <video width="100%" height="auto" controls autoPlay muted> <source src={video} type="video/mp4" /></video>
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
		</>
	);
}

export default Home;
