import { SmallData } from "./SmallData";
import "./SmallTeaser.scss";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 5,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="small-sc">
        <div className="container">
          <h2>Zuletzt angesehen</h2>

          <Slider {...settings}>
            {SmallData.map((item, index) => (
              <div key={index} className="small-teaser_wrapper ">
                <a className="sc-content" href="/">
                  <div className="s-teaser-img">
                    <img src={item.src} alt=""></img>
                  </div>
                  <h3 className="s-teaser-tittle">{item.title}</h3>
                  <div className="s-teaser-dsc ">
                    <div className="s-teaser-price  ">
                      <div className="s-ml c">{item.ml}</div>
                      <div className="s-price ">{item.price}</div>
                      <div className="s-svg ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path d="M16.053,32A16,16,0,0,1,9.8,1.282a.8.8,0,1,1,.628,1.471A14.43,14.43,0,1,0,14.667,1.67.8.8,0,1,1,14.51.078a16,16,0,0,1,3.15,31.844h0A16.008,16.008,0,0,1,16.053,32Z"></path>
                          <path d="M14.736,9.478a1.373,1.373,0,1,1,0,.02Zm2.424,3.207v11.2H15.025v-11.2Z"></path>
                        </svg>
                      </div>
                    </div>
                    <div className="s-ml-price">{item.mlprice}</div>
                    <div className="s-active">{item.active}</div>
                  </div>
                </a>

                <div className="s-add-to-cart">
                  <button className="s-add-teaser">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M18.449,15.8a.8.8,0,0,1-.8-.8h0V9.478a.8.8,0,1,1,1.6-.006V15a.8.8,0,0,1-.8.8Z"></path>
                      <path d="M21.211,13.04H15.687a.8.8,0,0,1,0-1.6h5.524a.8.8,0,0,1,0,1.6Z"></path>
                      <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                      <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                      <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}