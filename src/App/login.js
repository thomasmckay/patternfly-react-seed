import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <div className="pf-c-background-image"/>
      <div className="pf-c-login">
        <div className="pf-c-login__container">
          <header className="pf-c-login__header">
            <img className="pf-c-brand" src="/pf_logo_color.svg" alt="PatternFly Logo"/>
            <p>This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users.</p>
          </header>
          <main className="pf-c-login__main">
            <header className="pf-c-login__main-header">
              <h1 className="pf-c-title pf-m-3xl">
                Log in to your account
              </h1>
              <div className="pf-c-dropdown">
                <span id="dropdown-select-label" hidden>Select a fruit</span>
                <button id="dropdown-select-button" className="pf-c-dropdown__toggle" aria-labelledby="dropdown-select-label dropdown-select-button" aria-expanded="false">
                  <span className="pf-c-dropdown__toggle-text">
                    English
                  </span>
                  <i className="fas fa-caret-down pf-c-dropdown__toggle-icon" aria-hidden="true"></i>
                </button>
                <ul className="pf-c-dropdown__menu" aria-labelledby="dropdown-select-label" hidden>
                  <li>
                    <button className="pf-c-dropdown__menu-item" aria-pressed="true">Apples</button>
                  </li>
                  <li>
                    <button className="pf-c-dropdown__menu-item" aria-pressed="false">Oranges</button>
                  </li>
                  <li>
                    <button className="pf-c-dropdown__menu-item" aria-pressed="false" disabled>Bananas</button>
                  </li>
                  <li className="pf-c-dropdown__separator" role="separator"></li>
                  <li>
                    <button className="pf-c-dropdown__menu-item" aria-pressed="false">Carrots</button>
                  </li>
                </ul>
              </div>
              <p>Need an account?
                <a href="https://www.patternfly.org/">Sign up.</a>
              </p>
            </header>
            <div className="pf-c-login__main-body">
              <form className="pf-c-form">
                <div className="pf-c-form__group">
                  <label className="pf-c-form__label" required htmlFor="login-demo-form-username">
                    Username <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </label>
                  <input className="pf-c-form-control" required input="true" type="text" id="login-demo-form-username" name="login-demo-form-username"></input>
                </div>
                <div className="pf-c-form__group">
                  <label className="pf-c-form__label" required htmlFor="login-demo-form-password">
                    Password <span className="pf-c-form__label-required" aria-hidden="true">&#42;</span>
                  </label>
                  <input className="pf-c-form-control" required input="true" type="password" id="login-demo-form-password" name="login-demo-form-password"></input>
                </div>
                <div className="pf-c-form__group pf-m-action">
                  <button className="pf-c-button pf-m-primary" type="submit">
                    Log in
                  </button>
                  <div className="pf-c-check">
                    <input className="pf-c-check__input" type="checkbox" id="login-demo-checkbox" name="login-demo-checkbox"></input>
                    <label className="pf-c-check__label" htmlFor="login-demo-checkbox">
                      Keep me logged in for 30 days.</label>
                  </div>
                </div>
              </form>
            </div>
            <footer className="pf-c-login__main-footer">
              <h2 className="pf-c-title pf-m-md">
                Or log in with
              </h2>
              <ul className="pf-c-list pf-m-grid">
                <li>
                  <a href="#" className="pf-c-login__main-footer-link">
                    <img src="/console/logo-google.svg" alt=""/>
                    <span className="pf-c-login__main-footer-link-text">
                      Google
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="pf-c-login__main-footer-link">
                    <img src="/logo-github.svg" alt=""/>
                    <span className="pf-c-login__main-footer-link-text">
                      GitHub
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="pf-c-login__main-footer-link">
                    <img src="/logo-dropbox.svg" alt=""/>
                    <span className="pf-c-login__main-footer-link-text">
                      Dropbox
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="pf-c-login__main-footer-link">
                    <img src="/logo-facebook.svg" alt=""/>
                    <span className="pf-c-login__main-footer-link-text">
                      Facebook
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#" className="pf-c-login__main-footer-link">
                    <img src="/logo-gitlab.svg" alt=""/>
                    <span className="pf-c-login__main-footer-link-text">
                      GitLab
                    </span>
                  </a>
                </li>
                <li>
                  <button className="pf-c-button pf-m-link" id="login-more">
                    More...
                  </button>
                </li>
              </ul>
            </footer>
          </main>
          <footer className="pf-c-login__footer">
            <ul className="pf-c-list pf-m-inline">
              <li>
                <a href="#" className="pf-c-login__footer-link">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="pf-c-login__footer-link">
                  Help
                </a>
              </li>
              <li>
                <a href="#" className="pf-c-login__footer-link">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </footer>
        </div>
      </div>
    </div>
    ;
  }
}

export default Login;
