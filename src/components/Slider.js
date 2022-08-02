import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imgThree from '../backend/images/beans.jpeg';
import imgGrapes from '../backend/images/grapes.jpeg';
import imgFive from '../backend/images/china.jpeg';
import './Slider.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      autoplay: true,
      autoplaySpeed: 7000,
    };
    return (
      <div>
       
        <Slider {...settings}>
          <div className="Container">
            <img src={imgGrapes} alt='text'/>
            <div className="centered">Centered</div>
          </div>
          <div>
          <img src={imgGrapes} alt='text' />
          </div>
          <div>
          <img src={imgGrapes} alt='text' />
            
          </div>
          <div>
          <img src={imgGrapes} alt='text' />
           
          </div>
          <div>
          <img src={imgGrapes} alt='text' />
            
          </div>
          <div>
          <img src={imgGrapes} alt='text' />
            
          </div>
        </Slider>
      </div>
    );
  }
}