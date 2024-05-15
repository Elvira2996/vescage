import './Home.css';
import Category1 from '../../images/AH1.jpg'
import Category2 from '../../images/CM1.jpg'
import video from '../../images/video.mp4'
import { Link } from 'react-router-dom'
import Gallery1 from "../../images/gallery1.jpg"
import Gallery2 from "../../images/gallery2.jpg"
import Gallery3 from "../../images/gallery3.jpg"
import Gallery4 from "../../images/gallery4.jpg"
import Gallery5 from "../../images/gallery5.jpg"
import Present1 from "../../images/present1.jpg"
import Present2 from "../../images/present2.jpg"



function Home() {
	return (
		<>

			<section className="about">
				<div classNameNameNameName="video-container">
					<video width="100%" height="auto" controls autoPlay muted loop> <source src={video} type="video/mp4" /></video>
					<h1 classNameNameNameName="video-title">La Vacanza 2024</h1>
					<div classNameNameNameName="buttons">
						<button classNameNameNameName="btn_about">Shop women's</button>
						<button classNameNameNameName="btn_about">Discover More</button>
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
				<div className="gallery-content flex">
					<div className="gallery-left">
						<h2>New In</h2>
					</div>
					<div className="gallery-right">
						<div className="gallery-images">
							<div className="gallery-image">
								<img src={Gallery1} alt="#" />
								<p className="gallery-text"> <Link to="#">Athena</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery2} alt="#" />
								<p className="gallery-text"> <Link to="#">Medusa Buckle</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery3} alt="#" />
								<p className="gallery-text"> <Link to="#">Medusa '95</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery4} alt="#" />
								<p className="gallery-text"> <Link to="#">Underwear And Beachwear</Link></p>
							</div>
							<div className="gallery-image">
								<img src={Gallery5} alt="#" />
								<p className="gallery-text"> <Link to="#">Jewerly</Link></p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="presentation">
				<div className="presentation_image">
					<img src={Present1} alt="#" />
					<div className="image_content">
						<h2 className="presentation_title">New In for her</h2>
						<Link to="#" className="presentation_btn">Shop now</Link>
					</div>
				</div>
				<div className="presentation_image">
					<img src={Present2} alt="#" />
					<div className="image_content">
						<h2 className="presentation_title">Woman's bag</h2>
						<Link to="#" className="presentation_btn">Shop now</Link>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;
