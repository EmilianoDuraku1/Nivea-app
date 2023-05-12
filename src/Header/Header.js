import React from "react";
import BurgerMenu from "./BurgerMenu";
import "./Header.scss";

// Burger menu//
function Header() {
  const burgerMenu = (e) => {
    var target = e.target;
    target.closest(".burger-wraper").classList.toggle("open");
  };

  const fourthLevel = (e) => {
    var target = e.target;
    console.log(target);
    target.closest(".third-level-item").classList.toggle("open");
  };

  // NavBar Hover open//
  const handleEnter = (e) => {
    var target = e.target;
    var body = document.body;

    target.closest(".navbar").classList.add("open");
    body.classList.add("open");
    console.log(fourthLevel);
  };
  // NavBar !Hover close//
  const handleLeave = (e) => {
    var target = e.target;
    var body = document.body;
    target.closest(".open").classList.remove("open");
    body.classList.remove("open");
  };
  return (
    <header>
      <div className="container">
        <div className="nav-bar">
          <div className="container-nav">
            <div className="nav-img">
              <a href="/">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIHI9IjI0LjUiIHN0eWxlPSJmaWxsOiMwMDMyYTAiLz48cGF0aCBkPSJNMTMuODI4LDIwLjcyMmgtMi4xdjQuNDU3Yy0xLjg0LTEuNjUtMy42NzYtMy4zLTUuNTYxLTQuOTQ3djkuMDQ2aDIuMVYyNC44MjFjMS43NTIsMS41NTUsMy42MzMsMy4zLDUuNTYyLDQuOTQ3Wm00LjY1Nyw4LjU1M2gtMi4xVjIwLjcyMmgyLjFabTUuNDQzLjQ5Yy0xLjQ4OC0yLjgtMi45NzgtNi4wMTctNC40NjYtOS4wNDZoMi4zNjRsMi4xLDQuNjM0LDIuMDIyLTQuNjM0aDIuMzE2Yy0xLjQ0MiwzLjAzNy0yLjg4OCw2LjI0Mi00LjMzMyw5LjA0OVptMTAuOTc3LTcuMTc0SDMxLjM1MXYxLjQ3NmgzLjU1OHYxLjg2NkgzMS4zNTFWMjcuNGgzLjU1OHYxLjg2NmgtNS42NlYyMC43MTZoNS42NlptNS4zMzYtMi4zNTljLTEuNDQ1LDIuODUyLTIuODksNS45MjctNC4zMzUsOS4wNDZIMzguMWwuNDM3LTEuMDI1aDMuNDIxbC40MzksMS4wMjVINDQuNjdDNDMuMTcyLDI2LjE1OSw0MS42ODQsMjMuMDQsNDAuMjQxLDIwLjIzMlptLTEuMDg5LDYuNDE2LDEuMDg5LTIuNDg4LDEuMDUyLDIuNDg4WiIgc3R5bGU9ImZpbGw6I2ZmZiIvPjwvc3ZnPg=="
                  alt=""
                />
              </a>
            </div>

            <div className="navigation-wraper">
              <ul className="first-level">
                <li
                  className="navbar"
                  onMouseEnter={(e) => handleEnter(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <a
                    href="https://www.nivea.de/produkte"
                    className="navbar-list"
                  >
                    PRODUKTE
                  </a>

                  <div className="navbar-dropdown ">
                    <div className="nav-dropdown-content">
                      <div className="container">
                        <ul className="second-level1">
                          <li>
                            <a href="/" className="second-level-link">
                              NUR BEI NIVEA
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  parfum
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  duftkerze
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  raumduft
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  fanartikel
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  sternzeichendose
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              gesicht
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  gesichtspflege
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    Tagesspflege{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    nachtchcreme
                                  </li>
                                  <li className="fourth-level-item">antiage</li>
                                  <li className="fourth-level-item">
                                    ampullen&kur
                                  </li>
                                  <li className="fourth-level-item">
                                    gesichtsserum
                                  </li>
                                  <li className="fourth-level-item">
                                    gesichttsmaske
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  makeup
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">Cushion</li>
                                  <li className="fourth-level-item">
                                    Concealer
                                  </li>
                                  <li className="fourth-level-item">
                                    serumFoundation
                                  </li>
                                  <li className="fourth-level-item">
                                    GetonteCreme
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Gesichtsreinigung
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    FesteGesichtsreinigung
                                  </li>
                                  <li className="fourth-level-item">
                                    Milzellenwasser
                                  </li>
                                  <li className="fourth-level-item">
                                    Reinihungsmlich
                                  </li>
                                  <li className="fourth-level-item">
                                    MakeUpEntferner
                                  </li>
                                  <li className="fourth-level-item">
                                    Abschminktucher
                                  </li>
                                  <li className="fourth-level-item">
                                    Gesichtspeeling
                                  </li>
                                  <li className="fourth-level-item">
                                    Gesichtswasser
                                  </li>
                                  <li className="fourth-level-item">
                                    Waschgel
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Lippenpflege
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">Labelo</li>
                                  <li className="fourth-level-item">
                                    Lipgloss
                                  </li>
                                  <li className="fourth-level-item">
                                    LipScrub
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Augencreme
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  gesichtsserum
                                </a>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Hauttyptagesrou-Tine
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    RieifeHaut
                                  </li>
                                  <li className="fourth-level-item">
                                    TrockeneHaut
                                  </li>
                                  <li className="fourth-level-item">
                                    EmpfindlicheHaut
                                  </li>
                                  <li className="fourth-level-item">
                                    Mischaut
                                  </li>
                                  <li className="fourth-level-item">
                                    UnreineHaut
                                  </li>
                                  <li className="fourth-level-item">
                                    FettigeHaut
                                  </li>
                                  <li className="fourth-level-item">
                                    NormaleHaut
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              KÖRPER
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Körperpflege
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    bodylotion&milk
                                  </li>
                                  <li className="fourth-level-item">
                                    hautstraffendecreme
                                  </li>

                                  <li className="fourth-level-item">
                                    kopercreme
                                  </li>
                                  <li className="fourth-level-item">
                                    induschbodylotion
                                  </li>
                                </ul>
                              </li>

                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Dusche&Bad
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    koperpeeling
                                  </li>
                                  <li className="fourth-level-item">
                                    badezusatz
                                  </li>

                                  <li className="fourth-level-item">
                                    duschgel
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  deo
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">spray</li>
                                  <li className="fourth-level-item">rollon</li>

                                  <li className="fourth-level-item">
                                    zeesstabur
                                  </li>
                                  <li className="fourth-level-item">stick</li>
                                  <li className="fourth-level-item">
                                    deocreme
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  handcreme
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  seife
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  intimpflege
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  damenrasur
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              haare
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Styling
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    hitzeschutz
                                  </li>
                                  <li className="fourth-level-item">gel</li>

                                  <li className="fourth-level-item">
                                    schaumfestiger
                                  </li>
                                  <li className="fourth-level-item">
                                    haarspray{" "}
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  Shampo
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    pflegeshampoo
                                  </li>
                                  <li className="fourth-level-item">
                                    festesshampoo
                                  </li>

                                  <li className="fourth-level-item">trocken</li>
                                </ul>
                              </li>

                              <li>
                                <a href="/" className="third-level-link">
                                  Spülung&Haarkur
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Schaumfestiger
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  haarspray
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  trockenshampoo
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA sun
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  SonnencremeGesicht
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  sonnenmlich
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  sonnenspray
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  kids
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  aftersun
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA men
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  gesicht
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    Waschgel
                                  </li>
                                  <li className="fourth-level-item">
                                    feuchtigkeitscreme
                                  </li>
                                  <li className="fourth-level-item">
                                    menantiagehylaron
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  deo
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">spray</li>
                                  <li className="fourth-level-item">rollon</li>

                                  <li className="fourth-level-item">stick</li>
                                  <li className="fourth-level-item">
                                    zerstauber
                                  </li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  hare
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">Shampo</li>
                                  <li className="fourth-level-item">haargel</li>
                                </ul>
                              </li>
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  rasur
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    Rasierschaum
                                  </li>
                                  <li className="fourth-level-item">
                                    Rasiergel
                                  </li>
                                  <li className="fourth-level-item">
                                    aftershave
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  duschgel
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="second-level2">
                          <li>
                            <a href="/" className="second-level-link">
                              baby & kids
                            </a>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              gutschein
                            </a>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              % sale %
                            </a>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              gutschein & sets
                            </a>
                            <ul>
                              <li className="second-level2__title">
                                GeschenkfürSie
                              </li>
                              <li className="second-level2__title">
                                Geschenkefürihn
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NEUHEITEN
                            </a>
                            <ul>
                              <li className="second-level2__title">
                                miraclegarden
                              </li>
                              <li className="second-level2__title">
                                menextremewild
                              </li>
                              <li className="second-level2__title">
                                72hdeo,schutz
                              </li>
                              <li className="second-level2__title">
                                nachhaltigedeos
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              best seller
                            </a>
                            <ul>
                              <li className="second-level2__title">
                                niveadose
                              </li>
                              <li className="second-level2__title">
                                niveasoft
                              </li>
                              <li className="second-level2__title">niveaq10</li>
                              <li className="second-level2__title">
                                nivea hatluron
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="second-level3">
                          <li>
                            <a href="/" className="second-level-link">
                              REISEGRÖSSEN
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="navbar"
                  onMouseEnter={(e) => handleEnter(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <a href="/" className="navbar-list">
                    TIPPS & BERATUNG
                  </a>
                  <div className="navbar-dropdown ">
                    <div className="nav-dropdown-content">
                      <div className="container">
                        <ul className="second-level1">
                          <li>
                            <a href="/" className="second-level-link">
                              TIPPS FÜRS GESICHT{" "}
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  GesichtspflegeTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Gesichtsreinigung Tipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Hautirritationen Tipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  AugenpflegeTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  LippenpflegeTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  BeautyTipps
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              TIPPS FÜR DEN KÖRPER
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  HautpflegeTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Körperreinigung Tipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Händ&Füße Tipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Haarentfernung Tipps
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              TIPPS FÜR HAARE
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  HaarpflegeTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  StylingTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  HaarschnittTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Flech&tund Frisurentrends
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              MÄNNERPFLEGE<br></br>
                              TIPPS
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  MännerHautpflege Tipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  MännerrasurTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  MännerfrisurenTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  BartpflegeTipps
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              SONNENSCHUTZ TIPPS{" "}
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  UV_Strahlung& Lichtschutzfaktor
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SonnenbrandTipps
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  GesundeBräuneTipps
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              BABY & KIDS TIPPS
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  Schwimmenlernen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Tippsfür Schwangere
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  TippsfürsBaby
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  TippsfürKinder
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul
                          className="second-level2"
                          style={{
                            height: "230px",
                          }}
                        >
                          <li>
                            <a href="/" className="second-level-link">
                              LIFESTYLE TIPPS & TESTS
                            </a>
                            <ul>
                              <li className="second-level2__title">
                                Whatskincaretype areyou?
                              </li>
                              <li className="second-level2__title">
                                gesundheit
                              </li>
                              <li className="second-level2__title">
                                Entspannung
                              </li>
                              <li className="second-level2__title">
                                {" "}
                                Kosmetischeb Behandlungen
                              </li>
                              <li className="second-level2__title">
                                WeitereTipps&Tricks
                              </li>
                            </ul>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li
                  className="navbar"
                  onMouseEnter={(e) => handleEnter(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <a href="/" className="navbar-list">
                    NEUHEITEN
                  </a>
                  <div className="navbar-dropdown ">
                    <div className="nav-dropdown-content">
                      <div className="container">
                        <ul className="second-level1">
                          <li>
                            <a href="/" className="second-level-link">
                              NEU FÜR DEN SOMMER
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  SUNTOUCHBody Lotion
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  NIVEAAfterSun
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SUNUVGesicht
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SUNDryProtect
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  NIVEASunSensitiv
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  TräumDichDavon Pflegeserie
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              NEU & NACHHALTIG
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  MagicBAR
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  NachhaltigeDuschen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Nachhaltiges Rasiergel
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NEU FÜR DAS
                              <br />
                              GESICHT
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  3in1HyaluronSerum Foundation
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    Tagesspflege{" "}
                                  </li>
                                  <li className="fourth-level-item">
                                    nachtchcreme
                                  </li>
                                  <li className="fourth-level-item">antiage</li>
                                  <li className="fourth-level-item">
                                    ampullen&kur
                                  </li>
                                  <li className="fourth-level-item">
                                    gesichtsserum
                                  </li>
                                  <li className="fourth-level-item">
                                    gesichttsmaske
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Cellular Luminous630® Augenpflege
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Q10ENERGY Pflegeserie
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Cellular Luminous630®
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Cellular3IN1 Concealer
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NEU FÜR DIE HAARE
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  Gesundes,glänzen desHaar
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Pflege&HalfSoft Touch
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NEU FÜR MÄNNER
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  100JahreRetro Edition
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  JÜRGENKLOPP
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SensitivePro MENMALIST
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SensitiveProhanf
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  abenteueredition
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  sensasionellsensitiv
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              exklusiv
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  NIVEA&DLRGAktion 2022
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  NIVEAISTFÜRALLEDA
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Stophautkrebs
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  MelanomStrips{" "}
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Lebensretterpreis 2021
                                </a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <ul className="second-level2">
                          <li className="nav-teaser">
                            <a href="/" className="second-level-liink">
                              <div className="nav-teaser-img">
                                <img
                                  alt=""
                                  src="https://images-eu.nivea.com/-/media/local/de/nivea-fuer-mich/skinguide/2021-anpassungen/cam_skinguide-flyout.jpg?rx=0&ry=0&rw=703&rh=343&mw=470&hash=3FE6D319C1B41CEEAB613D8B62CA2D96"
                                ></img>
                                <span className="nav-teaser-title">
                                  SKIN GUIDE
                                </span>
                              </div>
                            </a>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="navbar"
                  onMouseEnter={(e) => handleEnter(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <a href="/" className="navbar-list">
                    NIVEA FÜR MICH
                  </a>

                  <div className="navbar-dropdown ">
                    <div className="nav-dropdown-content">
                      <div className="container">
                        <ul className="second-level1">
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA Für Mich Treueprogramm
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA SKiN GUiDE{" "}
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA App{" "}
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              Gewinnspiele{" "}
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              Botschafterak-tionen{" "}
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              Freunde werben Freunde{" "}
                            </a>
                            <ul className="third-level"></ul>
                          </li>
                        </ul>
                        <ul
                          className="second-level2"
                          style={{
                            height: "100px",
                          }}
                        >
                          <li>
                            <a href="/" className="second-level-link">
                              Teilnahmebedin-gungen{" "}
                            </a>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>

                <li
                  className="navbar"
                  onMouseEnter={(e) => handleEnter(e)}
                  onMouseLeave={(e) => handleLeave(e)}
                >
                  <a href="/" className="navbar-list">
                    ÜBER UNS
                  </a>
                  <div className="navbar-dropdown ">
                    <div className="nav-dropdown-content">
                      <div className="container">
                        <ul className="second-level1">
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA Haus
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  Philosophie
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Anwendungen& Preisliste
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  NIVEAHausShop
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Terminbuchen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Standortund Erlebnisort
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Jobs
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="/" className="second-level-link">
                              Nachhaltigkeit
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  Unsereinhaltsstoffe undformulierungen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Nachhaltige Verpackungen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  UnserEngagement
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Inhaltsstoffe Glossar
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              marke
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a
                                  className="third-level-link"
                                  onClick={(e) => fourthLevel(e)}
                                >
                                  CareForHuman Touch
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                  >
                                    <path d="M11.922,24.854a.8.8,0,0,1-.563-1.369L18.939,16l-7.58-7.485a.8.8,0,0,1,1.125-1.139l8.157,8.055a.8.8,0,0,1,0,1.139l-8.157,8.053A.793.793,0,0,1,11.922,24.854Z"></path>
                                  </svg>
                                </a>
                                <ul className="fourth-level">
                                  <li className="fourth-level-item">
                                    Überblick{" "}
                                  </li>
                                  <li className="fourth-level-item">Wissen</li>
                                  <li className="fourth-level-item">
                                    Projekte
                                  </li>
                                  <li className="fourth-level-item">Stories</li>
                                  <li className="fourth-level-item">
                                    Touchsavedmylife
                                  </li>
                                  <li className="fourth-level-item">
                                    Mama,Mami,Familie
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Markenhistorie
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  niveamen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Beiersdorfkarriere
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Beiersdorf Probandenzentrum
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              NIVEA & DLRG
                            </a>
                            <ul className="third-level">
                              <li className="third-level-item">
                                <a href="/" className="third-level-link">
                                  Seepferdchenfür alle
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Lebensretterpreis 2021
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Seepferdchen,Abzei-chenfür Schwimmhelden
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  Schwimmabzeichen
                                </a>
                              </li>
                              <li>
                                <a href="/" className="third-level-link">
                                  SchwimmkursfürKin-der,Checkliste
                                </a>
                              </li>
                            </ul>
                          </li>{" "}
                          <li>
                            <a href="/" className="second-level-link">
                              FAQ – Häufige Fragen
                            </a>
                            <ul className="third-level"></ul>
                          </li>{" "}
                        </ul>
                        <ul className="second-level2">
                          <li className="nav-teaser">
                            <a href="/" className="second-level-liink">
                              <div className="nav-teaser-img">
                                <img
                                  alt=""
                                  src="https://images-eu.nivea.com/-/media/global/neu-von-nivea/nivea-human-touch/articles/story-heliosa-juarez/000002_en_gl_niv_purpose_08_2020_digital_lp_stage_heloisa_juarez_2000_1333.jpg?rx=0&ry=27&rw=2000&rh=975&mw=940&hash=740E62CCD433A591A037F6623BDA0F8B"
                                ></img>
                                <span className="nav-teaser-title">
                                  HUMAN TOUCH – FÜR MEHR MITEINANDER
                                </span>
                              </div>
                            </a>
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="nav-icons">
              <div className="shop-card" id="shop-cart">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M10.573,21.96A3.725,3.725,0,1,0,14.3,25.685,3.725,3.725,0,0,0,10.573,21.96Z"></path>
                  <path d="M24.051,21.96a3.725,3.725,0,1,0,3.724,3.725A3.725,3.725,0,0,0,24.051,21.96Z"></path>
                  <path d="M25.249,19.747H11.337A2.473,2.473,0,0,1,8.96,17.989L5.576,6.939a.883.883,0,0,0-.847-.627H.88a.8.8,0,0,1,0-1.6H4.729A2.472,2.472,0,0,1,7.105,6.47l3.386,11.051a.879.879,0,0,0,.846.626H25.249a.537.537,0,0,0,.5-.34l4.69-10.774a.524.524,0,0,0-.063-.483.539.539,0,0,0-.447-.238H10.643a.8.8,0,1,1-.006-1.6H29.931A2.14,2.14,0,0,1,31.917,7.65l-4.69,10.775A2.123,2.123,0,0,1,25.249,19.747Z"></path>
                </svg>
                <span className="shop-card__icon-amount">41</span>
              </div>
              <div className="search" id="search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M30.718,31.522,22.4,23.207a.8.8,0,0,1-.014-1.116,11.957,11.957,0,1,0-3.463,2.542.8.8,0,0,1,.7,1.439,13.613,13.613,0,1,1,4.442-3.459l7.781,7.779Z"></path>
                </svg>
              </div>
              <div className="register" id="profile">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M22.484,23.44a10,10,0,0,0,3.5-6.648h.183a2.513,2.513,0,0,0,2.26-2.743v-.01A2.513,2.513,0,0,0,26.153,11.3h-.788a.59.59,0,0,0-.073.015c-.021,0-.038-.012-.059-.012a.8.8,0,0,0-.8.8v3.705A8.432,8.432,0,1,1,7.567,15.79V10.032a8.432,8.432,0,0,1,16.544-2.3.8.8,0,1,0,1.539-.438A10.033,10.033,0,0,0,5.967,10.032V11.3H5.834a2.513,2.513,0,0,0-2.26,2.743v.01a2.513,2.513,0,0,0,2.271,2.734h.175a10.017,10.017,0,0,0,3.53,6.67C3.6,24.609,0,27.394,0,31.2v.006A.8.8,0,1,0,1.6,31.2c0-3.654,4.518-5.712,9.962-6.427A9.98,9.98,0,0,0,16,25.822h.015a9.971,9.971,0,0,0,4.47-1.066c5.407.7,9.915,2.765,9.915,6.444a.8.8,0,1,0,1.6,0C32,27.371,28.413,24.574,22.484,23.44Zm4.339-9.392c0,.655-.354,1.145-.67,1.145H26.03V12.9h.123C26.469,12.9,26.823,13.393,26.823,14.048Zm-21.649,0c0-.655.354-1.144.67-1.144h.123v2.289H5.844C5.528,15.193,5.174,14.7,5.174,14.048Z"></path>
                </svg>
              </div>
              <div className="cocies" id="cocies">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M16.2,32A16,16,0,0,1,9.9,1.3l.5-.2a.841.841,0,0,1,1.1.4.841.841,0,0,1-.4,1.1l-.5.2A14.358,14.358,0,1,0,21.9,29.2a14.515,14.515,0,0,0,8.3-9.6h0A5.164,5.164,0,0,1,25,14.4v-.3a6.6,6.6,0,0,1-7.1-6V7.6a8.807,8.807,0,0,1,.2-1.7,4.08,4.08,0,0,1-3.5-4A3.6,3.6,0,0,1,14.8.8a.747.747,0,0,1,1-.5.747.747,0,0,1,.5,1,1.7,1.7,0,0,0-.1.7,2.476,2.476,0,0,0,2.5,2.5h.5a.829.829,0,0,1,.8.3,2.805,2.805,0,0,1-.1.5,5.45,5.45,0,0,0-.5,2.2,5,5,0,0,0,4.9,5,6.753,6.753,0,0,0,1.4-.2.8.8,0,0,1,1,.6v.5a3.528,3.528,0,0,0,3.4,4.7,1.949,1.949,0,0,0,.8-.1.618.618,0,0,1,.7.2.663.663,0,0,1,.2.7A15.8,15.8,0,0,1,16.2,32Z"></path>
                  <circle cx="9.5" cy="12.2" r="3.5"></circle>
                  <path d="M19,15.3a2.5,2.5,0,1,0,2.5,2.5A2.476,2.476,0,0,0,19,15.3Z"></path>
                  <path d="M10.5,19.2a2.9,2.9,0,1,0,2.9,2.9A2.9,2.9,0,0,0,10.5,19.2Z"></path>
                  <path d="M18.3,23.3a1.8,1.8,0,1,0,1.8,1.8A1.729,1.729,0,0,0,18.3,23.3Z"></path>
                  <path d="M28.8,4.6a1.8,1.8,0,0,0,0,3.6,1.733,1.733,0,0,0,1.8-1.8A1.793,1.793,0,0,0,28.8,4.6Z"></path>
                </svg>
              </div>
            </div>
            <div className="burger-wraper">
              <div className="burger-icon" onClick={(e) => burgerMenu(e)}>
                <span className="top-span"></span>
                <span className="center-span"></span>
                <span className="bottom-span"></span>
              </div>

              <svg
                className="bg-menu"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                <polygon points="2.065 12.051 4.294 16.499 6.429 12.051 7.231 16.217 8.502 16.217 6.919 8.583 4.294 13.999 1.659 8.583 0.065 16.217 1.263 16.217 2.065 12.051"></polygon>
                <polygon points="15.127 15.072 12.064 15.072 12.064 12.916 14.647 12.916 14.647 11.791 12.064 11.791 12.064 9.978 15.074 9.978 15.074 8.843 10.783 8.843 10.783 16.217 15.127 16.217 15.127 15.072"></polygon>
                <polygon points="18.939 11.572 23.803 16.499 23.803 8.843 22.522 8.843 22.522 13.499 17.657 8.583 17.657 16.217 18.939 16.217 18.939 11.572"></polygon>
                <path d="M30.719,8.843v4.239c0,1.458-.6,2.188-1.823,2.188-1.187,0-1.8-.73-1.8-2.156V8.843H25.813v4.25c0,2.114,1.1,3.3,3.083,3.3S32,15.2,32,13.072V8.843Z"></path>
                <path d="M30.469,6.724a.732.732,0,0,0,.75-.74.751.751,0,0,0-.74-.75.763.763,0,0,0-.75.76A.734.734,0,0,0,30.469,6.724Z"></path>
                <path d="M27.563,6.724a.715.715,0,0,0,.729-.74.743.743,0,0,0-.729-.75.765.765,0,0,0-.761.76A.739.739,0,0,0,27.563,6.724Z"></path>
              </svg>
            </div>
            <BurgerMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
