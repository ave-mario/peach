import React, { Component } from 'react';

import SignIn from '../sign_in';
import SignUp from '../sign_up';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      isShowingSignIn: false,
      isShowingSignUp: false,
    };
  }

  toggleSignInForm = () => {
    this.setState(prevState => ({
      isShowingSignIn: !prevState.isShowingSignIn,
    }));
  };

  toggleSignUpForm = () => {
    this.setState(prevState => ({
      isShowingSignUp: !prevState.isShowingSignUp,
    }));
  };

  render() {
    return (
      <div>
        <button className="signIn-open-btn" onClick={this.toggleSignInForm}>
          Login
        </button>
        <button className="signUp-open-btn" onClick={this.toggleSignUpForm}>
          SignUp
        </button>
        <SignIn
          show={this.state.isShowingSignIn}
          close={this.toggleSignInForm}
        />
        <SignUp
          show={this.state.isShowingSignUp}
          close={this.toggleSignUpForm}
        />
      </div>
    );
  }
}

export default Main;
