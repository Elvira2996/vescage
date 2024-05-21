import './Home.css';
import video from '../../images/video.mp4'
import { Link } from 'react-router-dom'
import Gallery1 from "../../images/gallery1.jpg"
import Gallery2 from "../../images/gallery2.jpg"
import Gallery3 from "../../images/gallery3.jpg"
import Gallery4 from "../../images/gallery4.jpg"
import Gallery5 from "../../images/gallery5.jpg"
import Present1 from "../../images/present1.jpg"
import Present2 from "../../images/present2.jpg"
import Shop1 from "../../images/shop1.jpg"
import Shop2 from "../../images/shop2.jpg"
import Shop3 from "../../images/shop3.jpg"
import Shop4 from "../../images/shop4.jpg"
import MainBag from "../../images/main_bag.jpg"





function Home() {
	return (
		<>

			<section className="main">
				<div className="video-container">
					<video width="100%" height="auto" controls autoPlay muted loop> <source src={video} type="video/mp4" /></video>
					<h1 className="video-title">La Vacanza 2024</h1>
					<div className="buttons">
						<button className="btn_main">Shop women's</button>
						<button className="btn_main">Discover More</button>
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

			<section className="shop-slide">
				<div className="shop-card">
					<img src={Shop1} alt="#" />

				</div>
				<div class="empty-space">
					<Link to="#" className="slide_name">Barocco Sea Necklace</Link>
					<Link to="#" className="slide_price">$450</Link>
				</div>
				<div className="shop-card">
					<img src={Shop2} alt="#" />
					<Link to="#" className="slide_name">Barocco Sea Knit Polo Cardigan</Link>
					<Link to="#" className="slide_price">$1,490</Link>
				</div>
				<div className="shop-card">
					<img src={Shop3} alt="#" />
					<Link to="#" className="slide_name">Barocco Sea Knit Crop Top</Link>
					<Link to="#" className="slide_price">$790</Link>
				</div>
				<div className="shop-card">
					<img src={Shop4} alt="#" />
					<Link to="#" className="slide_name">Barocco Sea Knit Mini Skirt</Link>
					<Link to="#" className="slide_price">$750</Link>
				</div>
			</section>
			<section class="main_bag">
				<img src={MainBag} alt="Bag" />
				<button class="main_btn">Shop the look</button>
			</section>
			
		</>
	);
}

export default Home;
