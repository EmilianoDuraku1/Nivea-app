import React from "react";
import "./ContentZone.scss";
function TextZone() {
  return (
    <div className="txt-content">
      <div className="container">
        <div className="txt-items">
          <div className="txt">
            <p>
              *Der 5-€-Onlinegutschein und die geschenkten Versandkosten gelten
              für einen Einkauf ab einem Bestellwert von 20 €. Nicht mit anderen
              Beiersdorf-Aktionen kombinierbar.
            </p>
            <p>
              Ausgenommen Gutscheine. Das Angebot gilt vier Wochen ab
              Registrierung der geworbenen Person für das NIVEA FÜR MICH
              Treueprogramm.
            </p>
          </div>
          <div className="txt">
            <p className="txt-p">
              **Der Code für das Willkommensgeschenk kann einmalig innerhalb von
              vier Wochen nach Registrierung bei einer Bestellung im NIVEA
              Online Shop ab einem Mindestbestellwert von 20 € eingelöst werden.
              Das Geschenk wird nach Codeeingabe automatisch in den Warenkorb
              gelegt. Nur solange der Vorrat reicht. Keine Barauszahlung
              möglich. Nicht gültig für den Kauf von Gutscheinen. Nicht mit
              anderen Aktionen der Beiersdorf AG kombinierbar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextZone;
