import React from "react";
import "./ContentZone.scss";
function Placeholder() {
  return (
    <div className="placeholder">
      <div className="container reveal  fade-right">
        <h3 className="placeholder__title">Wir brauchen Ihre Einwilligung</h3>
        <p className="placeholder__description">
          Dieser Inhalt wird von Squarelovin bereit gestellt. Wenn Sie den
          Inhalt aktivieren, werden ggf. personenbezogene Daten verarbeitet und
          Cookies gesetzt. Der externe Anbieter könnte dann den Aufruf und
          weitere Informationen für Werbung verwenden. Sie erklären sich damit
          einverstanden, dass die Daten auch an Drittstaaten außerhalb des
          Europäischen Wirtschaftsraumes ohne angemessenes
          datenschutzrechtliches Schutzniveau übermittelt werden (insb. USA). Es
          besteht dabei die Möglichkeit, dass Behörden auf die Daten Zugriff
          nehmen, ohne dass es einen Rechtsbehelf dagegen gibt. Sie können diese
          Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Weitere
          Informationen:<u>Datenschutzerklärung</u>
        </p>

        <div className="placeholder__button">
          <input className="button" type="button" value="Akzeptieren"></input>
        </div>
        <div className="placeholder__checkbox">
          <div className="placeholder__checkbox-wrapper">
            <a className="placeholder__checkbox-link" href="/">
              Squarelovin immer akzeptier
            </a>
            <input className="placeholder__checkbox-input" type="checkbox" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Placeholder;
