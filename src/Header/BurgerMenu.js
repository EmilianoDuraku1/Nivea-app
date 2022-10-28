import React from "react";
import "./Header.scss";

function BurgerMenu() {
  const burgerAcordion = (e) => {
    var target = e.target;
    target
      .closest(".burger-nav-mob__first-level__item")
      .classList.toggle("open");

    var removeActive = document.querySelectorAll(
      ".burger-nav-mob__first-level__item"
    );
    removeActive.forEach((element) => {
      element.addEventListener("click", () => {
        document
          .querySelector(".burger-nav-mob__first-level__item.open")
          .classList.remove("open");
        element.classList.add("open");
      });
    });
  };

  //////     remove open class ////////

  ///////////////////////////////////////////

  const burgerAcordion1 = (e) => {
    var target = e.target;

    target
      .closest(".burger-nav-mob__second-level__items__title")
      .classList.toggle("open");
    var removeActive1 = document.querySelectorAll(
      ".burger-nav-mob__second-level__items__title"
    );
    removeActive1.forEach((element) => {
      element.addEventListener("click", () => {
        document
          .querySelector(".burger-nav-mob__second-level__items__title.open")
          .classList.remove("open");
        element.classList.add("open");
      });
    });
  };

  return (
    <nav className="burger-content">
      <div className="burger-nav-mob">
        <div className="burger-nav-mob__first-level">
          <ul className="burger-nav-mob__first-level__items">
            <li className="burger-nav-mob__first-level__item">
              <span
                className="burger-nav-mob__first-level__item__title"
                onClick={(e) => burgerAcordion(e)}
              >
                PRODUKTE
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                </svg>
              </span>
              <ul className="burger-nav-mob__second-level">
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
              </ul>
            </li>
            <li className="burger-nav-mob__first-level__item">
              <span
                className="burger-nav-mob__first-level__item__title"
                onClick={(e) => burgerAcordion(e)}
              >
                TIPS & BERATUNG
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                </svg>
              </span>
              <ul className="burger-nav-mob__second-level">
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
              </ul>
            </li>
            <li className="burger-nav-mob__first-level__item">
              <span
                className="burger-nav-mob__first-level__item__title"
                onClick={(e) => burgerAcordion(e)}
              >
                NEUHEITEN
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                </svg>
              </span>
              <ul className="burger-nav-mob__second-level">
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
              </ul>
            </li>
            <li className="burger-nav-mob__first-level__item">
              <span
                className="burger-nav-mob__first-level__item__title"
                onClick={(e) => burgerAcordion(e)}
              >
                NIVEA FÜR MICH
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                </svg>
              </span>
              <ul className="burger-nav-mob__second-level">
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
              </ul>
            </li>
            <li className="burger-nav-mob__first-level__item">
              <span
                className="burger-nav-mob__first-level__item__title"
                onClick={(e) => burgerAcordion(e)}
              >
                ÜBER UNs
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                </svg>
              </span>
              <ul className="burger-nav-mob__second-level">
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <span
                    className="burger-nav-mob__second-level__items__title"
                    onClick={(e) => burgerAcordion1(e)}
                  >
                    NUR BEI NIVEA
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                      <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                    </svg>
                  </span>
                  <ul className="mob-burger-nav__third-level">
                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea"
                        className="mob-burger-nav__third-level__link"
                      >
                        Überblick
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/creme-40059002647870001.html"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fotodose
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/parfum"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Parfum
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/duftkerze"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Duftkerze
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/raumduft"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Raumduft
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/fanartikel"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Fanartikel
                      </a>
                    </li>

                    <li className="mob-burger-nav__third-level__item">
                      <a
                        href="/produkte/nur-bei-nivea/sternzeichendose"
                        class="nx-mob-burger-nav__item__title nx-mob-burger-nav__third-level__item__title"
                      >
                        Sternzeichendose
                      </a>
                    </li>
                  </ul>
                </li>{" "}
                <li className="burger-nav-mob__second-level__items">
                  <a
                    href="."
                    className="burger-nav-mob__second-level__items__title"
                  >
                    Überblick
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <ul className="actions-items">
          <li className="item">
            <a className="action-link" href="/./">
              <div className="action-link__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M2.01,32.05a.8.8,0,0,1-.8-.8.787.787,0,0,1,.049-.276l2.135-5.8a.8.8,0,1,1,1.5.553l-1.657,4.5L9.811,29.1a.8.8,0,0,1,.454.055,14.4,14.4,0,1,0-7.682-7.978.8.8,0,0,1-1.489.585v0a16.014,16.014,0,1,1,8.756,8.957l-7.7,1.321A.77.77,0,0,1,2.01,32.05Z"></path>
                  <circle cx="9.333" cy="16" r="2"></circle>
                  <circle cx="22.667" cy="16" r="2"></circle>
                  <circle cx="16" cy="16" r="2"></circle>
                </svg>
              </div>
              <div className="action-link__title">Kontakt</div>
            </a>
          </li>
          <li className="item">
            <a className="action-link" href="#43" id="coocies">
              <div className="action-link__icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M16.2,32A16,16,0,0,1,9.9,1.3l.5-.2a.841.841,0,0,1,1.1.4.841.841,0,0,1-.4,1.1l-.5.2A14.358,14.358,0,1,0,21.9,29.2a14.515,14.515,0,0,0,8.3-9.6h0A5.164,5.164,0,0,1,25,14.4v-.3a6.6,6.6,0,0,1-7.1-6V7.6a8.807,8.807,0,0,1,.2-1.7,4.08,4.08,0,0,1-3.5-4A3.6,3.6,0,0,1,14.8.8a.747.747,0,0,1,1-.5.747.747,0,0,1,.5,1,1.7,1.7,0,0,0-.1.7,2.476,2.476,0,0,0,2.5,2.5h.5a.829.829,0,0,1,.8.3,2.805,2.805,0,0,1-.1.5,5.45,5.45,0,0,0-.5,2.2,5,5,0,0,0,4.9,5,6.753,6.753,0,0,0,1.4-.2.8.8,0,0,1,1,.6v.5a3.528,3.528,0,0,0,3.4,4.7,1.949,1.949,0,0,0,.8-.1.618.618,0,0,1,.7.2.663.663,0,0,1,.2.7A15.8,15.8,0,0,1,16.2,32Z"></path>
                  <circle cx="9.5" cy="12.2" r="3.5"></circle>
                  <path d="M19,15.3a2.5,2.5,0,1,0,2.5,2.5A2.476,2.476,0,0,0,19,15.3Z"></path>
                  <path d="M10.5,19.2a2.9,2.9,0,1,0,2.9,2.9A2.9,2.9,0,0,0,10.5,19.2Z"></path>
                  <path d="M18.3,23.3a1.8,1.8,0,1,0,1.8,1.8A1.729,1.729,0,0,0,18.3,23.3Z"></path>
                  <path d="M28.8,4.6a1.8,1.8,0,0,0,0,3.6,1.733,1.733,0,0,0,1.8-1.8A1.793,1.793,0,0,0,28.8,4.6Z"></path>
                </svg>
              </div>
              <div className="action-link__title">Cookie-Einstellungen</div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default BurgerMenu;
