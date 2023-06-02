import React from "react";
import "./Footer.scss";
function Footer() {
  const footerAcordion = (e) => {
    e.target.closest(".links-panel").classList.toggle("open");
  };

  function myFunction(e) {
    var target = e.target;
    target.closest(".input").classList.add("key");

    if (e.target.value == "") {
      target.closest(".input").classList.remove("key");
    }

    console.log(e.target.value == "");
  }

  function clearInput(e) {
    e.target.closest(".input").querySelector("input").value = "";
    e.target.closest(".input").classList.remove("key");
  }

  return (
    <div className="container">
      <div className="footer-content row">
        <div className="footer-links col-md-6">
          <div className="links">
            <div className="links-panel">
              <div className="link-tittle" onClick={(e) => footerAcordion(e)}>
                Informationen
                <span className="arrow1"></span>
              </div>
              <div className="footer-nav">
                <ul>
                  <li>
                    <a href=",">Impressam</a>
                  </li>
                  <li>
                    <a href=",">Konatkt</a>
                  </li>
                  <li>
                    <a href=",">Natzangsbedingangen</a>
                  </li>
                  <li>
                    <a href=",">Datenschatzerklärang</a>
                  </li>
                  <li>
                    <a href=",">AGB</a>
                  </li>
                  <li>
                    <a href=",">Sitemap</a>
                  </li>
                  <li>
                    <a href=",">FAQ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="links">
            <div className="links-panel">
              <div className="link-tittle" onClick={(e) => footerAcordion(e)}>
                Einkaufen bei NIVEA
                <span className="arrow2"></span>
              </div>
              <div className="footer-nav">
                <ul>
                  <li>
                    <a a href=",">
                      Bei NIVEA einloggen
                    </a>
                  </li>
                  <li>
                    <a a href=",">
                      Bei NIVEA registrieren
                    </a>
                  </li>
                  <li>
                    <a a href=",">
                      Versandkosten & Rückgaberecht
                    </a>
                  </li>
                  <li>
                    <a a href=",">
                      Geschenkgutschein
                    </a>
                  </li>
                  <li>
                    <a a href=",">
                      Gutscheinwert prüfen
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-email-social col-md-6">
          <div className="email">
            <div className="links-panel">
              <div className="link-tittle" onClick={(e) => footerAcordion(e)}>
                Entd ecken Sie die Vorteile des NIVEA FÜR MICH Treueprogramms!
                <span className="arrow3"></span>
              </div>
              <div className="email-content">
                <div className="email-tittle">
                  <p>
                    Exklusiv für Mitglieder: kostenlose Produkte, persönliche
                    Hautanalyse und vieles mehr.
                  </p>
                </div>
                <div className="email-input">
                  <div className="input">
                    <input
                      className="form-control"
                      type="text"
                      name="einput"
                      onKeyUp={myFunction}
                      // onKeyDownCapture={myBsc}
                    />
                    <label for="E-Mail">E-Mail</label>
                    <span className="input-clear" onClick={clearInput}>
                      <svg className="input-clear__svg" viewBox="0 0 32 32">
                        <circle
                          className="circle"
                          cx="16"
                          cy="16"
                          r="11.5"
                        ></circle>
                        <path
                          className="cross-line"
                          d="M20.1781,11.5,11.5,20.1781"
                        ></path>
                        <path
                          className="cross-line"
                          d="M11.5,11.5l8.6781,8.6781"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="email-button">
                <button className=" button">weiter</button>
              </div>
            </div>
          </div>
          <div className="social">
            <div className="links-panel">
              <div className="link-tittle" onClick={(e) => footerAcordion(e)}>
                IN VERBINDUNG BLeiben
                <span className="arrow4"></span>
              </div>
              <div className="social-content">
                <div className="social-wrapper">
                  <a
                    className="social-icons"
                    href="https://www.facebook.com/niveadeutschland"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="cls-1"
                        d="M13,29.46V15.89H9.59V12.53H13V8c0-3.44,2.13-5.46,5.74-5.46a10.4,10.4,0,0,1,3.65.67l-.64,3.61A4.3,4.3,0,0,0,19.4,6a2.18,2.18,0,0,0-2.34,2.41v4.14h5l-.85,3.37H17.06V29.46Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="social-icons"
                    href="https://www.instagram.com/nivea_de/"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="cls-1"
                        d="M24.09,3.61H8a4.81,4.81,0,0,0-4.8,4.8V23.74A4.81,4.81,0,0,0,8,28.54H24.09a4.81,4.81,0,0,0,4.8-4.8V8.41A4.81,4.81,0,0,0,24.09,3.61Zm-8,9.33a4.86,4.86,0,1,1-4.86,4.86A4.87,4.87,0,0,1,16.1,12.93Zm6.18-7.08A2.26,2.26,0,1,1,20,8.11,2.26,2.26,0,0,1,22.28,5.86Zm1.81,21.08H8a3.21,3.21,0,0,1-3.2-3.2V12.3h8a6.46,6.46,0,1,0,6.77,0h7.8V23.74A3.21,3.21,0,0,1,24.09,26.94Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="social-icons"
                    href="https://www.pinterest.com/niveade/"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="cls-1"
                        d="M14.18,20.25c-.69,3.63-1.54,7.11-4,8.92-.77-5.48,1.13-9.6,2-14-1.51-2.54.18-7.66,3.37-6.4,3.92,1.55-3.39,9.45,1.52,10.44,5.13,1,7.22-8.89,4-12.12C16.49,2.46,7.71,7,8.79,13.69c.26,1.63,1.95,2.13.67,4.38-2.94-.65-3.82-3-3.7-6.06.18-5.06,4.55-8.6,8.92-9.09,5.54-.62,10.73,2,11.45,7.24.81,5.88-2.5,12.24-8.42,11.78C16.11,21.81,15.43,21,14.18,20.25Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="social-icons"
                    href="https://www.youtube.com/niveadeutschland"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="cls-1"
                        d="M31.08,8.39A4,4,0,0,0,28.29,5.6c-2.48-.68-12.38-.68-12.38-.68s-9.9,0-12.38.65A4,4,0,0,0,.75,8.39,41.75,41.75,0,0,0,.1,16a41.6,41.6,0,0,0,.65,7.61A4,4,0,0,0,3.54,26.4c2.5.68,12.38.68,12.38.68s9.9,0,12.38-.65a4,4,0,0,0,2.79-2.79A41.75,41.75,0,0,0,31.73,16,39.65,39.65,0,0,0,31.08,8.39ZM12.76,20.74V11.26L21,16Z"
                      ></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
