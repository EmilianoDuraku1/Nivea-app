import React, {Component} from "react";
import "./Trust.scss";
import { TrustData } from "./TrustData";
import Slider from "react-slick";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: false,
            dots: true,
          },
        },
        {
          breakpoint: 760,
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
      
   <section>
        <div className="trust-content">
          <div className="trust">
            <h2>Pflege seit 1911</h2>
            <div className="trust-wrapper">
              <Slider {...settings}>
              {TrustData.map((item, index) => (
                <div key={index} className="trust-iner">
                  <div className="trust-items ">
                    <div className="trust-circle">
                      <div className="circle-text">
                        <span className="num">{item.number}</span>
                        <span className="name">{item.name}</span>
                      </div>
                    </div>
                    <div className="trust-dsc">{item.dcs}</div>
                  </div>
                </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    
    );
  }
}


// function Trust() {
//     return (
//       <section>
//         <div className="trust-content">
//           <div className="trust">
//             <h2>Pflege seit 1911</h2>
//             <div className="trust-wrapper row">
//               {TrustData.map((item, index) => (
//                 <div key={index} className="trust-iner col-xs-3 ">
//                   <div className="trust-items ">
//                     <div className="trust-circle">
//                       <div className="circle-text">
//                         <span className="num">{item.number}</span>
//                         <span className="name">{item.name}</span>
//                       </div>
//                     </div>
//                     <div className="trust-dsc">{item.dcs}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     );
// }

// export default Trust;
