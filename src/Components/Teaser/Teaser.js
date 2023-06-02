import React from "react";
import "./Teaser.scss";
import { TeaserData } from "./TeaserData";
function Teaser() {
  return (
    <section className="teaser">
      <div className="container">
        <h1 className="teaser__headline reveal">
          Neuigkeiten & Highlefefwights
        </h1>
        <div className="teaser__list">
          {TeaserData.map((item, index) => (
            <div key={index[0]} className="teaser__item reveal">
              <div className="teaser__img-content">
                <img className="teaser__img" src={item.src} alt=""></img>
              </div>
              <div className="teaser__content">
                <div className="teaser__title">{item.title} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Teaser;
