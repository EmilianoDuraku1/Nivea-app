import React from "react";
import "./Social.scss";
function Social() {
  return (
    <div className="user-actions">
      <div className="container">
        <h3 className="user-actions__title">TEILEN</h3>
        <div className="user-actions__social-media social-media">
          <div className="social-media__facebook">
            <a
              className="social-media__link"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.nivea.de%2F"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 24 24"
                width="28px"
                height="28px"
              >
                <g id="Icons">
                  <g
                    id="Group"
                    transform="translate(-1224.000000, -272.000000)"
                  >
                    <g transform="translate(1217.000000, 270.000000)">
                      <g id="Facebook">
                        <path
                          fill="white"
                          id="path-1_1_"
                          className="st0"
                          d="M20.2,8.4c0-0.6,0.4-0.9,0.7-0.9c0.8-0.1,2.5,0,2.5,0V4c0,0-0.7-0.1-3.7,0
                            c-3,0.1-3.6,2.8-3.6,3.5s0,3.2,0,3.2H14V14h2.1v10h4.1V14H23l0.5-3.3h-3.3V8.4z"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </div>
          <div className="social-media__pinterest">
            <a
              className="social-media__link"
              href="https://www.pinterest.com/pin/create/link/?url=https%3A%2F%2Fwww.nivea.de%2F&media=https%3A%2F%2Fimages-eu.nivea.com%2F-%2Fmedia%2Fniveax%2Ficons%2Flogos%2Fbrandmark_600x332.png%3Frx%3D1%26ry%3D0%26rw%3D598%26rh%3D332&description="
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 774 1000.2"
                width="28px"
                height="28px"
              >
                <path
                  fill="white"
                  d="M0 359c0-42 8.8-83.7 26.5-125s43-79.7 76-115 76.3-64 130-86S345.7 0 411 0c106 0 193 32.7 261 98s102 142.3 102 231c0 114-28.8 208.2-86.5 282.5S555.3 723 464 723c-30 0-58.2-7-84.5-21s-44.8-31-55.5-51l-40 158c-3.3 12.7-7.7 25.5-13 38.5S259.8 873 253.5 885c-6.3 12-12.7 23.3-19 34s-12.7 20.7-19 30-11.8 17.2-16.5 23.5-9 11.8-13 16.5l-6 8c-2 2.7-4.7 3.7-8 3s-5.3-2.7-6-6c0-.7-.5-5.3-1.5-14s-2-17.8-3-27.5-2-22.2-3-37.5-1.3-30.2-1-44.5 1.3-30.2 3-47.5 4.2-33.3 7.5-48c7.3-31.3 32-135.7 74-313-5.3-10.7-9.7-23.5-13-38.5s-5-27.2-5-36.5l-1-15c0-42.7 10.8-78.2 32.5-106.5S303.3 223 334 223c24.7 0 43.8 8.2 57.5 24.5S412 284.3 412 309c0 15.3-2.8 34.2-8.5 56.5s-13.2 48-22.5 77-16 52.5-20 70.5c-6.7 30-.8 56 17.5 78s42.8 33 73.5 33c52.7 0 96.2-29.8 130.5-89.5S634 402.7 634 318c0-64.7-21-117.5-63-158.5S470.3 98 395 98c-84 0-152.2 27-204.5 81S112 297.7 112 373c0 44.7 12.7 82.3 38 113 8.7 10 11.3 20.7 8 32-1.3 3.3-3.3 11-6 23s-4.7 19.7-6 23c-1.3 7.3-4.7 12.2-10 14.5s-11.3 2.2-18-.5c-39.3-16-68.8-43.5-88.5-82.5S0 411 0 359z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="user-actions__share-info share-info">
          <div className="share-info__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16.9,20.841H14.7l-.534-.679.55-5.738a2.75,2.75,0,0,1-1.132-2.377,2.554,2.554,0,0,1,2.328-2.521,2.357,2.357,0,0,1,1.811.776,2.753,2.753,0,0,1,.711,1.875,2.719,2.719,0,0,1-1.164,2.263l.566,5.739-.518.678Z"></path>
              <path d="M28.438,8.015A5.689,5.689,0,0,1,25.082,3.2a1.963,1.963,0,0,0-1.945-1.828H8.888a1.968,1.968,0,0,0-1.954,1.81A5.59,5.59,0,0,1,3.558,8a3.972,3.972,0,0,0-.758.5,1.146,1.146,0,0,0-.464.834.892.892,0,0,0,.908.908A1.363,1.363,0,0,0,4.058,9.8a2.644,2.644,0,0,1,.378-.265A7.124,7.124,0,0,0,8.675,3.507l.034-.363,14.647.034.034.362a7.477,7.477,0,0,0,4.419,6.137l.238.105,0,.432a27.205,27.205,0,0,1-2.409,8.705,20.535,20.535,0,0,1-9.448,9.893l-.18.091-.18-.091a20.533,20.533,0,0,1-9.444-9.884,25.093,25.093,0,0,1-1.925-5.86h0a.906.906,0,1,0-1.794.256h0a28.964,28.964,0,0,0,2.1,6.349,22.268,22.268,0,0,0,10.543,10.8,1.593,1.593,0,0,0,.693.155h.041a1.584,1.584,0,0,0,.647-.138,22.278,22.278,0,0,0,10.546-10.8,29.075,29.075,0,0,0,2.583-9.328A2.293,2.293,0,0,0,28.438,8.015Z"></path>
            </svg>
          </div>
          <div className="share-info__text">
            Durch die Nutzung dieses Features erklären Sie sich damit
            einverstanden, dass die Daten auch an Drittstaaten außerhalb des
            Europäischen Wirtschaftsraumes ohne angemessenes
            datenschutzrechtliches Schutzniveau übermittelt werden (insb. USA).
            Es besteht dabei die Möglichkeit, dass Behörden auf die Daten
            Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen gibt. Sie
            können diese Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen. Weitere Informationen finden Sie in der&nbsp;
            <u>Datenschutzerklärung </u>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
