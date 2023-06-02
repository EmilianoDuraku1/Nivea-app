import React from "react";
import "./ContentZone.scss";
import Placeholder from "./Placeholder";
import TextZone from "./TextZone";

function IntroItems() {
  return (
    <section>
      <div className="content-wrapper">
        <div className="intro-text reveal fade-left">
          <div className="container">
            <h2 className="intro-text__title">#NIVEALIEBE</h2>
            <p className="intro-text__subtitle">
              Entdecke NIVEA auf Instagram und teile deine schönsten
              Produktbilder mit
            </p>
            <p className="intro-text__subtitle">#NIVEALIEBE!</p>
          </div>
        </div>
        <Placeholder />
        <TextZone />
      </div>
    </section>
  );
}

export default IntroItems;
