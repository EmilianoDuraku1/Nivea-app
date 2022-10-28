import React from "react";
import "./Teaser.scss";
function Teaser() {
  return (
    <section>
      <div className="container">
        <h1>Neuigkeiten &amp; Highlefefwights</h1>
        <div className="teaser-list">
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/dezember/cam_marketingteaser-duftset-15.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=C536CBFB750AEC2C2FF70CD1596D5B70"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2> Exklusiv im Online Shop </h2>
                <h2>die NIVEA Duftwelt</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/nivea-fuer-mich/freunde-werben-freunde/2022/cam_mgm_marketingteaser.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=A17BA7DBC70B0E54C58093CDDA6ED567"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>Freunde werben Freunde für</h2>
                <h2>das NIVEA Treueprogramm</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/juni-2022/cam_welcome-duschen_marketingteaser.webp?rx=0&ry=4&rw=866&rh=691&mw=594&hash=93F564EC8B3EEF2A8F3C9D75CCF0D794"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>Zum Treueprogramm anmelden &</h2>
                <h2>Willkommensgeschenk sichern!</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/januar-2022/cp_reife-haut_marketingteaser.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=43B6EEB579D223AD4AC946B98796E132"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>NIVEA & DLRG – feiert mit uns </h2>
                <h2>am Strand | Termine 2022</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/dezember/cam_marketingteaser-fotodose-11.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=1B416EB5EA4338FBF4DF9085AC5BF04C"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>Erinnerungen pflegen – dein</h2>
                <h2> Bild auf der NIVEA Fotodose</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/august/nivea-marketingteaser-nachhaltigkeit.webp?rx=0&ry=4&rw=865&rh=691&mw=594&hash=A092CFFD336A95F6AD88D01D22B1471A"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>NACHHALTIGKEIT BEI NIVEA</h2>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="teaser-list ">
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/juni-2022/cam_welcome-duschen_marketingteaser.webp?rx=0&ry=4&rw=866&rh=691&mw=594&hash=93F564EC8B3EEF2A8F3C9D75CCF0D794"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>Zum Treueprogramm anmelden &</h2>
                <h2>Willkommensgeschenk sichern!</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2022/januar-2022/cp_reife-haut_marketingteaser.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=43B6EEB579D223AD4AC946B98796E132"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>NIVEA & DLRG – feiert mit uns </h2>
                <h2>am Strand | Termine 2022</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="teaser-list">
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/dezember/cam_marketingteaser-fotodose-11.webp?rx=0&ry=0&rw=866&rh=691&mw=594&hash=1B416EB5EA4338FBF4DF9085AC5BF04C"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>Erinnerungen pflegen – dein</h2>
                <h2> Bild auf der NIVEA Fotodose</h2>
              </div>
            </div>
          </div>
          <div className="teaser-wrapper">
            <div className="img-content">
              <img
                className="teaser-img"
                src="https://images-eu.nivea.com/-/media/local/de/home/stage-marketingteaser-2021/august/nivea-marketingteaser-nachhaltigkeit.webp?rx=0&ry=4&rw=865&rh=691&mw=594&hash=A092CFFD336A95F6AD88D01D22B1471A"
                alt=""
              ></img>
            </div>
            <div className="teaser-content">
              <div className="teaser-tittle">
                <h2>NACHHALTIGKEIT BEI NIVEA</h2>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Teaser;
