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
      speed: 1000,
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
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
        {
          breakpoint: 770,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
          },
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            autoplaySpeed: 2000,
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
              <section>
                <div>
                  <div className="slider-content">
                    <div className="img-content">
                      <img className="slider-img" src={item.src} alt=""></img>
                    </div>
                  </div>
                  <div className="podium-text" id={item.id}>
                    <div>
                      <h2>{item.title}</h2>
                      <p>{item.subtitle}</p>

                      <input
                        className="button"
                        type="button"
                        value={item.btnName}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

// function ProductSlider() {
//   return (
//     <section>
//       {SliderImg.map((item, index) => (
//         <div key={index} className="slider-content">
//           <div className="img-content">
//             <img className="slider-img" src={item.src} alt=""></img>
//           </div>
//           <div className="podium-text">
//             <h2>{item.title}</h2>
//             <p>{item.subtitle}</p>

//             <input className="button" type="button" value={item.btnName} />
//           </div>
//         </div>
//       ))}
//     </section>
//     // <section>
//     //   <div className="slider-content">
//     //     <div className="img-content">
//     //       <img
//     //         className="slider-img"
//     //         src="https://images-eu.nivea.com/-/media/local/de/neu-von-nivea/luminous630/update/header_3840x1500.jpg?rx=0&ry=0&rw=3840&rh=1500&mw=3080&hash=C1E267A8F43244BD983C7EDE492F2A8A"
//     //         alt=""
//     //       ></img>
//     //     </div>
//     //     <div className="podium-text">
//     //       <h2>DIE PATENTLÖSUNG GEGEN PIGMENTFLECKEN</h2>
//     //       <p>
//     //         CELLULAR LUMINOUS <sup>630®</sup>
//     //         Anti-Pigmentflecken, der Durchbruch von NIVEA gegen Pigmentflecken,
//     //         für sichtbare Ergebnisse in 4 Wochen.
//     //       </p>

//     //       <input
//     //         className="button"
//     //         type="button"
//     //         value="Jetzt entdecken"
//     //       />
//     //     </div>
//     //   </div>
//     // </section>
//   );
// }

// export default ProductSlider;
