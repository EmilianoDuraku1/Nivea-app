import React, { useState, useEffect } from "react";
import "./Cookies.scss";
function Cookies() {
  useEffect(() => {
    var coockies = document.getElementById("cookies");
    var closeContent = document.getElementById("cookies-close");
    var openContet = document.getElementById("cocies");
    var openContet2 = document.getElementById("coocies");
    var aceeptCookies = document.getElementById("btn-blue");
    closeContent.onclick = function () {
      coockies.style.display = "none";
    };
    openContet.onclick = function () {
      coockies.style.display = "block";
    };
    openContet2.onclick = function () {
      coockies.style.display = "block";
      coockies.style.zIndex = "999";
    };
    aceeptCookies.onclick = function () {
      coockies.style.display = "none";
    };
  }, []);

  const [deleteCookies, setDeleteHeader] = useState(true);

  const handleDelete = () => {
    setDeleteHeader(false);
    document.cookie = "cookiesInvisible";
  };

  const readCookie = () => {
    const cookieIsAdded = document.cookie.indexOf("cookiesInvisible");
    if (cookieIsAdded == 0) {
      setDeleteHeader(false);
    }
  };

  useEffect(() => {
    readCookie();
  });

  return (
    <>
      {deleteCookies && (
        <div className="cookies" id="cookies">
          <div className="cookies__inner">
            <div className="cookies__inner__content">
              <div className="inner-title">
                Hinweis und Einwilligung zu Cookies & ähnlichen Tools
              </div>
              <div className="inner-text">
                Wir verwenden Cookies/Tools um diesen Dienst anzubieten und zu
                betreiben, inklusive des Schutzes gegen Betrug oder Missbrauch
                sowie zur Reichweitenmessung. Letzterem kann in den
                Einstellungen widersprochen werden.
                <hr />
                Mit zusätzlichem Klick auf „alle akzeptieren“ verwenden wir
                Cookies/Tools um die Qualität und Performance unseres Dienstes
                zu verbessern, für funktionale und personalisierte Leistungs-
                und Designverbesserungen, die Effektivität unserer Anzeigen oder
                Kampagnen zu messen, für personalisierte Inhalte und um Ihnen
                individuelle Informationen zu Marketingzwecken, auch außerhalb
                unserer Webseite via ANBIETER zu präsentieren. Diese ermöglichen
                personalisierte Online-Anzeigen und erweiterte Analyse- und
                Auswertungsmöglichkeiten über die Zielgruppe und das
                Nutzerverhalten. Dies beinhaltet auch den Zugriff und die
                Speicherung von Daten auf Ihrem Gerät. Sie sind zudem damit
                einverstanden, dass die Daten auch an Drittstaaten außerhalb des
                Europäischen Wirtschaftsraumes ohne angemessenes
                datenschutzrechtliches Schutzniveau übermittelt werden (insb.
                USA). Es besteht dabei die Möglichkeit, dass Behörden auf die
                Daten Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen
                gibt. Sollten Sie die in diesem Absatz beschriebene Verarbeitung
                nicht wünschen, können Sie das Banner schließen. Ihre
                Einwilligung können Sie jederzeit mit Wirkung für die Zukunft
                widerrufen
              </div>
            </div>
          </div>
          <div className="cookies__inner__buttons">
            <span className="coockies-btn-white">
              <a href="/">
                <span>Einstellungen</span>
              </a>
            </span>
            <span
              className="coockies-btn-blue"
              id="btn-blue"
              onClick={handleDelete}
            >
              <a href="#1" className="cmpboxbtn cmpboxbtnyes cmptxt_btn_yes">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnssvg="http://www.w3.org/2000/svg"
                  height="32px"
                  viewBox="0 0 32 32"
                  width="32px"
                >
                  <path
                    role="presentation"
                    d="M27 4l-15 15-7-7-5 5 12 12 20-20z"
                  ></path>
                </svg>{" "}
                <span>Alle akzeptieren</span>
              </a>
            </span>
          </div>
          <div className="cookies-footer">
            <a href="/" className="cookies-footer__txt">
              Cookies
            </a>
            <a href="/" className="cookies-footer__txt">
              Datenschutzerklärung
            </a>
            <a href="/" className="cookies-footer__txt">
              AGB
            </a>
            <a href="/" className="cookies-footer__txt">
              Impressum
            </a>
          </div>
          <div className="cookies__logo">
            <img
              alt=""
              src="https://cdn.consentmanager.net/delivery/img/logo1627385241x9374.gif"
            ></img>
          </div>
          <div
            className="cookies__close"
            id="cookies-close"
            onClick={handleDelete}
          ></div>
        </div>
      )}
    </>
  );
}

export default Cookies;
