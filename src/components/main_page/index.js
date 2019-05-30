import React, { Component } from 'react';

import { Button } from '../../shared/buttons.css';
import SignInContainer from '../../containers/sign_in.container';
import SignUpContainer from '../../containers/sign_up.container';
import PropTypes from 'prop-types';

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
    const { logout } = this.props;
    const { isShowingSignIn, isShowingSignUp } = this.state;
    return (
      <div>
        <Button onClick={this.toggleSignInForm}>Login</Button>
        <Button onClick={this.toggleSignUpForm}>SignUp</Button>
        <Button onClick={logout}>LOGOUT</Button>
        <SignInContainer
          handleSubmit={this.submitForm}
          show={isShowingSignIn}
          close={this.toggleSignInForm}
        />
        <SignUpContainer show={isShowingSignUp} close={this.toggleSignUpForm} />
      </div>
    );
  }
}

Main.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Main;
