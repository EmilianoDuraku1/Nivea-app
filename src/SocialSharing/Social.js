import React from "react";
import "./Social.scss";
function Social() {
  return (
    <div className="container">
      <div className="user-actions">
        <h3>TEILEN</h3>
        <div className="social-share">
          <ul className="social-media">
            <li className="facebook">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.nivea.de%2F"
                data-rel="popup"
                rel="nofollow"
                title="Bei Facebook teilen"
                role="button"
                aria-label="Bei Facebook teilen"
              >
                <span className="fb"></span>
              </a>
            </li>
            <li className="pinterest">
              <svg viewBox="0 0 24 24" aria-label="Pinterest" role="img">
                <path
                 
                  d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="share-info">
          <div className="info-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16.9,20.841H14.7l-.534-.679.55-5.738a2.75,2.75,0,0,1-1.132-2.377,2.554,2.554,0,0,1,2.328-2.521,2.357,2.357,0,0,1,1.811.776,2.753,2.753,0,0,1,.711,1.875,2.719,2.719,0,0,1-1.164,2.263l.566,5.739-.518.678Z"></path>
              <path d="M28.438,8.015A5.689,5.689,0,0,1,25.082,3.2a1.963,1.963,0,0,0-1.945-1.828H8.888a1.968,1.968,0,0,0-1.954,1.81A5.59,5.59,0,0,1,3.558,8a3.972,3.972,0,0,0-.758.5,1.146,1.146,0,0,0-.464.834.892.892,0,0,0,.908.908A1.363,1.363,0,0,0,4.058,9.8a2.644,2.644,0,0,1,.378-.265A7.124,7.124,0,0,0,8.675,3.507l.034-.363,14.647.034.034.362a7.477,7.477,0,0,0,4.419,6.137l.238.105,0,.432a27.205,27.205,0,0,1-2.409,8.705,20.535,20.535,0,0,1-9.448,9.893l-.18.091-.18-.091a20.533,20.533,0,0,1-9.444-9.884,25.093,25.093,0,0,1-1.925-5.86h0a.906.906,0,1,0-1.794.256h0a28.964,28.964,0,0,0,2.1,6.349,22.268,22.268,0,0,0,10.543,10.8,1.593,1.593,0,0,0,.693.155h.041a1.584,1.584,0,0,0,.647-.138,22.278,22.278,0,0,0,10.546-10.8,29.075,29.075,0,0,0,2.583-9.328A2.293,2.293,0,0,0,28.438,8.015Z"></path>
            </svg>
          </div>
          <div className="info-txt">
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
