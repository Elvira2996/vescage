
import React, { useState } from 'react';
import './NotFound.css'; 
import { Link } from 'react-router-dom';

function NotFound() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  const handleMouseMove = (event) => {
    const pageX = window.innerWidth;
    const pageY = window.innerHeight;

    // Vertical Axis
    const newMouseY = event.pageY;
    const yAxis = (pageY / 2 - newMouseY) / pageY * 300;

    // Horizontal Axis
    const newMouseX = event.pageX / -pageX;
    const xAxis = -newMouseX * 100 - 100;

    setMouseX(xAxis);
    setMouseY(yAxis);
  };

  return (
    <div className="box" onMouseMove={handleMouseMove}>
      <div className="box__ghost">
        {/* Ghost symbols and eyes */}
        <div className="box__ghost-eyes" style={{ transform: `translate(${mouseX}%, -${mouseY}%)` }}>
          <div className="box__eye-left"></div>
          <div className="box__eye-right"></div>
        </div>

        {/* Ghost bottom part */}
        <div className="box__ghost-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        {/* Ghost shadow */}
        <div className="box__ghost-shadow"></div>
      </div>

      {/* Error message and button */}
      <div className="box__description">
        <div className="box__description-container">
          <div className="box__description-title">Whoops!</div>
          <div className="box__description-text">It seems like we couldn't find the page you were looking for</div>
        </div>
        <Link to="https://codepen.io/diogo_ml_gomes/" target="_blank" className="box__button">Go back</Link>
      </div>
    </div>
  );
}

export default NotFound;