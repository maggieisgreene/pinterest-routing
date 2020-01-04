import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './Auth.scss';

class Auth extends React.Component {
  loginClickEvent = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    return (
      <div className="Auth">
        <h1>Auth Page</h1>
        <button className="btn btn-light" onClick={this.loginClickEvent}>Login With Google</button>
      </div>
    );
  }
}

export default Auth;
