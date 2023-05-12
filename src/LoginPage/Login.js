import React, { useEffect, useState } from "react";
import "./Login.scss";
function Login() {
  useEffect(() => {
    var loginClose = document.getElementById("login-close");
    var loginOpen = document.getElementById("profile");
    var logIn = document.getElementById("login");
    loginClose.onclick = function () {
      logIn.style.opacity = "0";
      logIn.style.zIndex = "-90";
    };
    loginOpen.onclick = function () {
      logIn.style.opacity = "1";
      logIn.style.zIndex = "999";
    };
  }, []);

  const [state, setstate] = useState(false);

  const toogleBtn = () => {
    setstate((prevState) => !prevState);
  };

  return (
    <div className="login" id="login">
      <div className="container">
        <div className="login-close" id="login-close"></div>
        <div className="row">
          <div className="col-md-4">
            <div className="login__panel">
              <div className="login__panel__header"></div>
              <div className="login__panel__body">
                <div className="create">
                  <p>
                    Noch kein Profil?
                    <a href="," className="">
                      Jetzt registrieren
                    </a>
                  </p>
                </div>
                <div className="divider">
                  <h2>oder</h2>
                </div>
                <div className="social">
                  <div className="intro">
                    <h2>Mit einem sozialen Netzwerk anmelden</h2>
                  </div>
                  <div className="options">
                    <div className="facebook">
                      <button className="fb-exchange"></button>
                    </div>
                    <div className="google">
                      <button className="google-exchange"></button>
                    </div>
                    <div className="apple">
                      <button className="apple-exchange"></button>
                    </div>
                  </div>
                </div>
                <form className="local-acount">
                  <div className="entry">
                    <div className="int">
                      <h2>Melde dich mit Deinem Profil an</h2>
                    </div>
                    <div className="entry-item">
                      <input
                        type="text"
                        className="signin"
                        name="E-Mail-Adresse"
                        title='Geben Sie einen gültigen Wert für "E-Mail-Adresse" ein.'
                        placeholder="E-Mail-Adresse"
                        aria-label="E-Mail-Adresse"
                      ></input>
                    </div>
                    <div className="entry-item">
                      <div className="eye-icon" id="eye" onClick={toogleBtn}>
                        {state ? (
                          <span className="show-pass--enabled">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M15.019,18.254a2.486,2.486,0,0,0,3.318-3.318Z"></path>
                              <path d="M17.037,13.69a2.5,2.5,0,0,0-3.263,3.264Z"></path>
                              <path d="M24.787,15.477a17.5,17.5,0,0,0-3.695-3.3l3.323-3.324a.9.9,0,0,0-1.272-1.273l-3.695,3.7a8.4,8.4,0,0,0-3.291-.714h-.036c-2.927,0-5.867,1.651-8.737,4.906a.8.8,0,0,0,0,1.058,18.1,18.1,0,0,0,3.608,3.206L7.585,23.143a.9.9,0,1,0,1.272,1.273l3.773-3.772a8.537,8.537,0,0,0,3.491.791h.036c2.917-.014,5.821-1.666,8.63-4.912A.8.8,0,0,0,24.787,15.477Zm-8.638,4.357a6.455,6.455,0,0,1-2.292-.418l1.162-1.162a2.5,2.5,0,0,1-1.245-1.3l-1.626,1.625A15.337,15.337,0,0,1,9.065,16c2.391-2.545,4.762-3.834,7.056-3.834h.028a6.609,6.609,0,0,1,2.051.361L17.037,13.69a2.506,2.506,0,0,1,1.3,1.246l1.6-1.6A14.612,14.612,0,0,1,23.109,16C20.772,18.534,18.433,19.824,16.149,19.834Z"></path>
                            </svg>
                          </span>
                        ) : (
                          <span className="show-pass--disable">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 32 32"
                            >
                              <path d="M16.121,21.435c-2.927,0-5.867-1.651-8.737-4.906a.8.8,0,0,1,0-1.058c2.87-3.255,5.81-4.906,8.737-4.906h.036c2.917.014,5.821,1.666,8.63,4.912a.8.8,0,0,1,0,1.046c-2.809,3.246-5.713,4.9-8.63,4.912ZM9.065,16c2.4,2.556,4.818,3.869,7.084,3.834,2.284-.01,4.622-1.3,6.96-3.834-2.337-2.534-4.676-3.824-6.96-3.834h-.028C13.827,12.166,11.456,13.455,9.065,16Z"></path>
                              <circle cx="16.083" cy="16" r="2.5"></circle>
                            </svg>
                          </span>
                        )}

                        {/* <span className="show-pass--disable">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M16.121,21.435c-2.927,0-5.867-1.651-8.737-4.906a.8.8,0,0,1,0-1.058c2.87-3.255,5.81-4.906,8.737-4.906h.036c2.917.014,5.821,1.666,8.63,4.912a.8.8,0,0,1,0,1.046c-2.809,3.246-5.713,4.9-8.63,4.912ZM9.065,16c2.4,2.556,4.818,3.869,7.084,3.834,2.284-.01,4.622-1.3,6.96-3.834-2.337-2.534-4.676-3.824-6.96-3.834h-.028C13.827,12.166,11.456,13.455,9.065,16Z"></path>
                            <circle cx="16.083" cy="16" r="2.5"></circle>
                          </svg>
                        </span>
                        <span className="show-pass--enabled">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                          >
                            <path d="M15.019,18.254a2.486,2.486,0,0,0,3.318-3.318Z"></path>
                            <path d="M17.037,13.69a2.5,2.5,0,0,0-3.263,3.264Z"></path>
                            <path d="M24.787,15.477a17.5,17.5,0,0,0-3.695-3.3l3.323-3.324a.9.9,0,0,0-1.272-1.273l-3.695,3.7a8.4,8.4,0,0,0-3.291-.714h-.036c-2.927,0-5.867,1.651-8.737,4.906a.8.8,0,0,0,0,1.058,18.1,18.1,0,0,0,3.608,3.206L7.585,23.143a.9.9,0,1,0,1.272,1.273l3.773-3.772a8.537,8.537,0,0,0,3.491.791h.036c2.917-.014,5.821-1.666,8.63-4.912A.8.8,0,0,0,24.787,15.477Zm-8.638,4.357a6.455,6.455,0,0,1-2.292-.418l1.162-1.162a2.5,2.5,0,0,1-1.245-1.3l-1.626,1.625A15.337,15.337,0,0,1,9.065,16c2.391-2.545,4.762-3.834,7.056-3.834h.028a6.609,6.609,0,0,1,2.051.361L17.037,13.69a2.506,2.506,0,0,1,1.3,1.246l1.6-1.6A14.612,14.612,0,0,1,23.109,16C20.772,18.534,18.433,19.824,16.149,19.834Z"></path>
                          </svg>
                        </span> */}
                      </div>
                      <input
                        className="password"
                        id="password"
                        type={state ? "text" : "password"}
                        name="Passwort"
                        placeholder="Passwort"
                        aria-label="Passwort"
                        autoomplete="current-password"
                        aria-required="true"
                      ></input>
                    </div>
                    <div className="remember">
                      <input
                        id="rememberMe"
                        type="checkbox"
                        name="rememberMe"
                      ></input>
                      <label htmlFor="rememberMe">Angemeldet bleiben</label>
                    </div>
                    <div className="button-register">
                      <button className="button">ANMELDEN</button>
                    </div>
                    <a
                      className="forgot-pass"
                      href="/86bb23ba-0872-4701-a4b5-467edb8b10f4/B2C_1A_signup_signin_Nivea/api/CombinedSigninAndSignup/forgotPassword?csrf_token=blNTdUNzT0hyWWxFUmN5Z3pVNkxIZEdncldwOEhHdkZaQzRTTGkwUFByL1p6T1BBdWtrQXlRNXI2OUxrR3RrTjhvSFc4cE80cis2UThaa3Y2UGRpcUE9PTsyMDIyLTA4LTI2VDEwOjIxOjE3LjQ5OTE1MDFaO1c5eTlSSEZZUW9jekVUMEZvaHU2MHc9PTt7Ik9yY2hlc3RyYXRpb25TdGVwIjoxfQ==&amp;tx=StateProperties=eyJUSUQiOiI1OWUwZGU3My04Y2I1LTRiMmItYjQxYi02MTRiMWU3Y2Y2MmMifQ&amp;p=B2C_1A_signup_signin_Nivea"
                    >
                      Kennwort vergessen?
                    </a>
                  </div>
                </form>
              </div>
              <div className="login__panel__footer">
                <div className="links">
                  <div>
                    {" "}
                    <a href="https://www.nivea.de/ueber-uns/impressum">
                      Impressum
                    </a>{" "}
                    |{" "}
                    <a href="https://www.nivea.de/ueber-uns/datenschutzerklaerung">
                      Datenschutzerklärung
                    </a>{" "}
                    |{" "}
                    <a href="https://www.nivea.de/ueber-uns/nutzungsbedingungen">
                      Nutzungsbedingungen
                    </a>
                  </div>
                </div>
                <div className="copy">Copyright © Beiersdorf 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
