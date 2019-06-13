import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'shared/buttons.css';
import SignInContainer from 'containers/sign_in.container';
import SignUpContainer from 'containers/sign_up.container';
import VerificationContainer from 'containers/validation.container';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      isShowingSignIn: false,
      isShowingSignUp: false,
      isShowingCodeInput: false,
    };
    this.toggleSignInForm = this.toggleSignInForm.bind(this);
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.toggleCodeInput = this.toggleCodeInput.bind(this);
  }

  toggleSignInForm() {
    this.setState(prevState => ({
      isShowingSignIn: !prevState.isShowingSignIn,
      isShowingSignUp: false,
      isShowingCodeInput: true,
    }));
  }

  toggleSignUpForm() {
    this.setState(prevState => ({
      isShowingSignUp: !prevState.isShowingSignUp,
      isShowingSignIn: false,
      isShowingCodeInput: true,
    }));
  }

  toggleCodeInput() {
    const { isSended } = this.props;
    if (isSended) {
      this.setState({ isShowingCodeInput: true });
    }
    this.setState({ isShowingCodeInput: false });
  }

  render() {
    const { logout, isAuthenticated, isSended } = this.props;
    const { isShowingSignIn, isShowingSignUp, isShowingCodeInput } = this.state;
    return (
      <div>
        {!isAuthenticated ? (
          <div>
            <Button onClick={this.toggleSignInForm} className="signInButton">
              LOGIN
            </Button>
            <Button onClick={this.toggleSignUpForm} className="signUpButton">
              SIGNUP
            </Button>
          </div>
        ) : (
          <Button onClick={logout} className="logOutButton">
            LOGOUT
          </Button>
        )}
        {isShowingSignIn && !isSended && !isAuthenticated ? (
          <SignInContainer close={this.toggleSignInForm} />
        ) : null}
        {isShowingSignUp && !isSended && !isAuthenticated ? (
          <SignUpContainer close={this.toggleSignUpForm} />
        ) : null}
        {isSended && isShowingCodeInput ? (
          <VerificationContainer close={this.toggleCodeInput} />
        ) : null}
      </div>
    );
  }
}

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  isSended: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

export default Main;
