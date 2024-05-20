import './About.css';


function About(){
  return (
    <>
    
    <section className="recent">
    <div className="recent_left">
        <h2 className="recent_title">RECENT STORIES</h2>
        <div className="recent_icons">
            <div className="left_icon"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="dots"></div>
            <div className="right_icon"></div>
        </div>
    </div>
    <div className="recent_right">
        <div className="image_container">
            <img src={recentImage1} alt="#"/>
            <p className="recent_txt">TEXT 1</p>
            <Link to="#" className="read_more">Read More</Link>
        </div>
        <div className="image_container">
            <img src={recentImage2} alt="#"/>
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
        </div>
        <div className="image_container">
            <img src={recentImage3} alt="Image 2"/>
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
        </div>
        <div className="image_container">
            <img src={recentImage4} alt="#"/>
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
        </div>
        
    </div>
</section>

    </>
  );
}


export default About;
