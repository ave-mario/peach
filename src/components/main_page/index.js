import React, { Component } from 'react';

import { Button } from '../../shared/buttons.css';
import SignInContainer from '../../containers/login.container';
import SignUp from '../sign_up';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      isShowingSignIn: false,
      isShowingSignUp: false,
    };
    this.toggleSignInForm = this.toggleSignInForm.bind(this);
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
  }

  toggleSignInForm() {
    this.setState(prevState => ({
      isShowingSignIn: !prevState.isShowingSignIn,
      isShowingSignUp: false,
    }));
  }

  toggleSignUpForm() {
    this.setState(prevState => ({
      isShowingSignUp: !prevState.isShowingSignUp,
      isShowingSignIn: false,
    }));
  }

  render() {
    const { isShowingSignIn, isShowingSignUp } = this.state;
    return (
      <div>
        <Button onClick={this.toggleSignInForm}>Login</Button>
        <Button onClick={this.toggleSignUpForm}>SignUp</Button>
        <SignInContainer
          handleSubmit={this.submitForm}
          show={isShowingSignIn}
          close={this.toggleSignInForm}
        />
        <SignUp show={isShowingSignUp} close={this.toggleSignUpForm} />
      </div>
    );
  }
}

export default Main;
