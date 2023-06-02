import React, { Component } from "react";
import "./Slider.scss";
import { SliderImg } from "./SliderData";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            arrows: false,
          },
        },
      ],
    };
    function addClass() {
      var indexSlider = SliderImg[0];
      indexSlider.classList.add("open23");
    }

    return (
      <div className="slider-wraper">
        <Slider {...settings}>
          {SliderImg.map((item, index) => (
            <div key={index[0]}>
              <div className="slider-content">
                <div className="img-content" onLoad={addClass}>
                  <img className="slider-img" src={item.src} alt=""></img>
                </div>
              </div>
              <div className="podium-text" id={item.id}>
                <div className="">
                  <h2>{item.title}</h2>
                  <p dangerouslySetInnerHTML={{ __html: item.subtitle }}></p>

                  <input
                    className="button"
                    type="button"
                    value={item.btnName}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}
