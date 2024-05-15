import './Home.css';
import Category1 from '../../images/AH1.jpg'
import Category2 from '../../images/CM1.jpg'
import video from '../../images/video.mp4'
import { Link } from 'react-router-dom'


function Home() {
	return (
		<>
		
			<section className="about">
				<div classNameNameName="video-container">
					<video width="100%" height="auto" controls autoPlay muted> <source src={video} type="video/mp4" /></video>
					<h1 classNameNameName="video-title">La Vacanza 2024</h1>
					<div classNameNameName="buttons">
						<button classNameNameName="btn_about">Shop women's</button>
						<button classNameNameName="btn_about">Discover More</button>
					</div>
				</div>
			</section>
			<section className="category">
				<div className="category-wrapper flex">
					<div className="category-item">
						<img src={Category1} alt="" />
						<div className='overlay'>
							<h2>Title 1</h2>
							<p><Link to="#">Explore More</Link></p>
						</div>
					</div>
					<div className="category-item">
						<img src={Category2} alt="" />
						<div className='overlay'>
							<h2>Title 2</h2>
							<p><Link to="#">Explore More</Link></p>
						</div>
					</div>
				</div>
			</section>
			<section className="gallery">
    <div classNameName="gallery-content flex">
        <div classNameName="gallery-left">
            <h2>New In</h2>
        </div>
        <div className="gallery-right">
            <div className="gallery-images">
                <div className="gallery-image">
                    <img src="image1.jpg" alt="Image 1" />
                    <p className="gallery-text"><a href="#">Link 1</a></p>
                </div>
				<div className="gallery-image">
            <img src="image2.jpg" alt="Image 2" />
            <p className="gallery-text"><a href="#">Link 2</a></p>
        </div>
        <div className="gallery-image">
            <img src="image3.jpg" alt="Image 3" />
            <p className="gallery-text"><a href="#">Link 3</a></p>
        </div>
        <div className="gallery-image">
            <img src="image4.jpg" alt="Image 4" />
            <p className="gallery-text"><a href="#">Link 4</a></p>
        </div>
        <div className="gallery-image">
            <img src="image5.jpg" alt="Image 5" />
            <p className="gallery-text"><a href="#">Link 5</a></p>
        </div>
            </div>
        </div>
    </div>
</section>
		</>
	);
}

export default Home;
