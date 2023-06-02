import React, { useEffect } from "react";

function Layer() {
  useEffect(() => {
    var shopCart = document.getElementById("layer");
    var closeCart = document.getElementById("close");
    closeCart.onclick = function () {
      shopCart.style.opacity = "0";
      shopCart.style.zIndex = "-1";
    };
  }, []);
  return (
    <div className="layer-page" id="layer">
      <div className="layer-wrapper">
        <div
          className="layer-close"
          id="close"
        ></div>
        <div className="layer-content">
          <div className="layer-content__wrapper">
            <div className="layer-content__wrapper__header">
              <h2 className="layer-content__wrapper__header__title">
                Ihr Warenkorb ist leer
              </h2>
            </div>
            <div className="layer-content__wrapper__content">
              <div className="container">
                <div className="layer-content__wrapper__content__items">
                  <div className="layer-content__wrapper__content__items__img">
                    <img
                      src="https://images-eu.nivea.com/-/media/niveax/feature/eshop/checkout/eshop_empty_cart_2048w.jpg"
                      alt=""
                    ></img>
                  </div>

                  <div className="layer-content__wrapper__content__items__text">
                    <p>
                      Lassen Sie sich von unseren beliebtesten Produkten
                      inspirieren, oder melden Sie sich an um zu prüfen, ob Sie
                      bereits Produkte im Warenkorb haben.
                    </p>
                  </div>
                  <div className="layer-content__wrapper__content__items__buttons">
                    <p>
                      <a className="btn-primary" href="/">
                        UNSERE BESTSELLER
                      </a>
                      <br />
                      <a className="btn-secondary" href="/">
                        ANMELDEN
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layer;
