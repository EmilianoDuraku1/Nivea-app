import React, { useEffect } from "react";
import "./Search.scss";
function Search() {
  useEffect(() => {
    var search = document.getElementById("search");
    var closeSearch = document.getElementById("search-close");
    var openSearch = document.getElementById("search-icon");
    closeSearch.onclick = function () {
      search.style.opacity = "0";
      search.style.zIndex = "-11";
    };
    openSearch.onclick = function () {
      search.style.opacity = "1";
      search.style.zIndex = "1168";
    };
  }, []);
  return (
    <div className="search-page" id="search">
      <div className="search-page__wrapper">
        <div className="search-close" id="search-close"></div>
        <div className="search-page__content">
          <div className="search-page__content__wrapper">
            <div className="search-page__content__header">
              <h2 className="search-page__title"> Suche</h2>
            </div>
            <div className="search-page__content__body">
              <div className="container">
                <div className="search-page-zone">
                  <div className="search-page-zone__placeholder">
                    <div className="search-page-zone__placeholder__items">
                      <div className="search-page-zone__input">
                        <div className="search-page-zone__input__inner">
                          <input
                            className="input-text"
                            type="text"
                            placeholder="Suche"
                          />
                          <span className="input-clear">
                            <svg
                              className="input-clear__svg"
                              viewBox="0 0 32 32"
                            >
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
                          <buttton className="search-zone-submit" type="submit">
                            <span>
                              <svg
                                className="submit-icon"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 32 32"
                              >
                                <path d="M30.718,31.522,22.4,23.207a.8.8,0,0,1-.014-1.116,11.957,11.957,0,1,0-3.463,2.542.8.8,0,0,1,.7,1.439,13.613,13.613,0,1,1,4.442-3.459l7.781,7.779Z"></path>
                              </svg>
                            </span>
                          </buttton>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chiose-zone">
                  <div className="choise-zone__wrapper">
                    <div className="choise-zone__placeholder">
                      <div className="choise-zone__items">
                        <ul className="choise-zone__list">
                          <li className="choise-zone-item">
                            <a href="/" className="choise-zone__link">
                              Neu & Exklusiv
                            </a>
                          </li>
                          <li className="choise-zone-item">
                            <a href="/" className="choise-zone__link">
                              Beratung
                            </a>
                          </li>
                          <li className="choise-zone-item">
                            <a href="/" className="choise-zone__link">
                              Produkte
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
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

export default Search;
