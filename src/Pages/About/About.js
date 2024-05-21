import './About.css';
import React from 'react';
import { Link } from 'react-router-dom'
import recentImage1 from '..//..//images/recent1.jpg'
import recentImage2 from '..//..//images/recent2.jpg'
import recentImage3 from '..//..//images/recent3.jpg'
import recentImage4 from '..//..//images/recent4.jpg'

import arrivalImage1 from '..//..//images/arr1.jpg';
import arrivalImage2 from '..//..//images/arr2.jpg';

const About = () => {
  // Массив данных для 50 картинок
  const arrivalData = [
    { id: 1, name: 'arrivalImage1', image: 'arr1.jpg' },
    { id: 2, name: 'arrivalImage2', image: 'arr2.jpg' },
    // ... остальные данные
    { id: 50, name: 'Product 50', image: 'arrival_50.jpg' }
  ];

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
            <div className="dots"></div>
            <div className="right_icon"></div>
          </div>
        </div>
        <div className="recent_right flex">
          <div className="image_container">
            <img src={recentImage1} alt="#" />
            <p className="recent_txt">TEXT 1</p>
            <Link to="#" className="read_more">Read More</Link>
          </div>
          <div className="image_container">
            <img src={recentImage2} alt="#" />
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
          </div>
          <div className="image_container">
            <img src={recentImage3} alt="Image 2" />
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
          </div>
          <div className="image_container">
            <img src={recentImage4} alt="#" />
            <p className="recent_txt">TEXT 2</p>
            <Link to="#" className="read_more">Read More</Link>
          </div>

        </div>
      </section>
      <section className="arrivals">
      <h2 className="arrival_title">Arrivals</h2>
      <p className="arrival_txt">Текст для arrivals может быть здесь</p>

      <div className="arrival_images_container">
          {arrivalData.map((item) => (
            <React.Fragment key={item.id}>
              <div className="arrival_item">
                <img src={arrivalImage1} alt={item.name} className="arrival_img" />
                <Link to={`/product/${item.id}`} className="arrival_name">{item.name}</Link>
              </div>
              <div className="arrival_item">
                <img src={arrivalImage2} alt={item.name} className="arrival_img" />
                <Link to={`/product/${item.id}`} className="arrival_name">{item.name}</Link>
              </div>
            </React.Fragment>
          ))}
        </div>
    </section>

    </>
  );

};

export default About;
