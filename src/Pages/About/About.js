import './About.css';
import React from 'react';
import { Link } from 'react-router-dom'


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

      <section className="arrivals">
      <h2 className="arrival_title">NEW ARRIVALS FOR HER</h2>
      <p className="arrival_txt">Women's new arrivals including clothing, shoes, bags, and accessories from the latest collection.</p>

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
