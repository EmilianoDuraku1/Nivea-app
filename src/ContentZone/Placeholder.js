import React from "react";
import "./ContentZone.scss";
function Placeholder() {
  return (
    <div className="placeholder-content">
      <div className="placeholder">
        <div className="placeholder__title">
          <h3>Wir brauchen Ihre Einwilligung</h3>
        </div>
        <div className="placeholder__txt">
          <p>
            Dieser Inhalt wird von Squarelovin bereit gestellt. Wenn Sie den
            Inhalt aktivieren, werden ggf. personenbezogene Daten verarbeitet
            und Cookies gesetzt. Der externe Anbieter könnte dann den Aufruf und
            weitere Informationen für Werbung verwenden. Sie erklären sich damit
            einverstanden, dass die Daten auch an Drittstaaten außerhalb des
            Europäischen Wirtschaftsraumes ohne angemessenes
            datenschutzrechtliches Schutzniveau übermittelt werden (insb. USA).
            Es besteht dabei die Möglichkeit, dass Behörden auf die Daten
            Zugriff nehmen, ohne dass es einen Rechtsbehelf dagegen gibt. Sie
            können diese Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen. Weitere Informationen:<u>Datenschutzerklärung</u>
          </p>
        </div>
        <div className="placeholder__btn">
          <input className="button" type="button" value="Akzeptieren"></input>
        </div>
        <div className="placeholder__cb">
          <div className="cb">
            <a href="/">Squarelovin immer akzeptier</a>
            <input className="chb" type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
