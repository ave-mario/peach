import React, { Component } from 'react';

import {Button} from "../../shared/buttons.css";
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
      isShowingSignUp: false
    }));
  };

  toggleSignUpForm = () => {
    this.setState(prevState => ({
      isShowingSignUp: !prevState.isShowingSignUp,
      isShowingSignIn: false
    }));
  };

  render() {
    return (
      <div>
        <Button onClick={this.toggleSignInForm}>
          Login
        </Button>
        <Button onClick={this.toggleSignUpForm}>
          SignUp
        </Button>
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
