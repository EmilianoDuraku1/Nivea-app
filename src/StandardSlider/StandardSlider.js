import React, { Component } from "react";
import "./StandardSlider.scss";
import { StandardData } from "./StandardData";

import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
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
      <section className="standard-slider-section">
        <div className="container">
          <h2>Ausgewählte Tipps für Sie</h2>
          <div className="standard-slider">
            <Slider {...settings}>
              {StandardData.map((item, index) => (
                <article key={index} className="standard-article">
                  <div className="standard-wraper">
                    <a href="fds">
                      <div className="img-content">
                        <img src={item.src} alt="" />
                      </div>

                      <div className="standard-teaser-content">
                        <div className="s-subline">{item.subline}</div>
                        <div className="s-headline">{item.headline}</div>
                        <div className="s-dsc">{item.dsc}</div>
                        <div className="s-link">{item.link}</div>
                      </div>
                    </a>
                  </div>
                </article>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    );
  }
}

// function StandardSlider() {
//   return (
//     <section className="standard-slider-section">
//       <div className="container">
//         <h2>Ausgewählte Tipps für Sie</h2>
//         <div className="standard-slider">
//           <article className="standard-article">
//             {StandardData.map((item, index) => (
//               <div key={index} className="standard-wraper">
//                 <a href="fds">
//                   <div className="standard-teaser-img">
//                     <div className="img-content">
//                       <img src={item.src} alt=""></img>
//                     </div>
//                   </div>
//                   <div className="standard-teaser-content">
//                     <div className="s-subline">{item.subline}</div>
//                     <div className="s-headline">{item.headline}</div>
//                     <div className="s-dsc">{item.dsc}</div>
//                     <div className="s-link">{item.link}</div>
//                   </div>
//                 </a>
//               </div>
//             ))}
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default StandardSlider;
