import React, { Component } from 'react';
import { Alert, Button } from '@patternfly/react-core';
import styles from '@patternfly/patternfly-next/components/Login/login.css';
import Login from './login.js';
import './app.css';


export default class App extends Component {
  state = {
    isShowing: true
  };
  dismissNotification = () => {
    this.setState({ isShowing: false });
  };

  render() {
    const { isShowing } = this.state;
    if (window.__user) {
      return (
        <div className="app-container">
          {isShowing && (
            <div className="notification-container">
              <Alert
                variant="success"
                title="Setup Complete"
                action={
                  <Button onClick={this.dismissNotification} variant="secondary">
                    Dismiss
                  </Button>
                }
              >
                You have successfully launched your patternfly starter project.
              </Alert>
            </div>
          )}
        </div>
      );
    } else {
      return(
        <div className="app-container">
          <Login/>
        </div>
      );
      /*
      return (
        <div className="app-container">
          {isShowing && (
            <div className="notification-container">
              <Alert
                variant="success"
                title="Login Required"
                action={
                  <Button onClick={this.dismissNotification} variant="secondary">
                    Dismiss
                  </Button>
                }
              >
                You must login.
              </Alert>
            </div>
          )}
        </div>
      );
      */
    }
  };
}
