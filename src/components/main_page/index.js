import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'shared/buttons.css';
import SignInContainer from 'containers/sign_in.container';
import SignUpContainer from 'containers/sign_up.container';
import VerificationContainer from 'containers/validation.container';
import {
  SnackBar,
  SnackBarImage,
  SnackBarDescription,
} from 'shared/snackbar.css';

class Main extends Component {
  constructor() {
    super();

    this.state = {
      isShowingSignIn: false,
      isShowingSignUp: false,
      isShowingCodeInput: false,
      show: false,
      hasTriggered: false,
    };
    this.toggleSignInForm = this.toggleSignInForm.bind(this);
    this.toggleSignUpForm = this.toggleSignUpForm.bind(this);
    this.toggleCodeInput = this.toggleCodeInput.bind(this);
    this.toggleSnackBar = this.toggleSnackBar.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { error } = this.props;
    if (nextProps.error !== error) {
      this.setState({ hasTriggered: false });
    }
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

  toggleSnackBar() {
    const { hasTriggered } = this.state;
    const { error } = this.props;
    if (!hasTriggered && error) {
      this.setState({ show: true });
      setTimeout(
        function() {
          this.setState({ show: false });
        }.bind(this),
        5000,
      );
      this.setState({ hasTriggered: true });
    }
  }

  render() {
    const { logout, isAuthenticated, isSended, error } = this.props;
    const {
      isShowingSignIn,
      isShowingSignUp,
      isShowingCodeInput,
      show,
    } = this.state;
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
        {!show ? this.toggleSnackBar() : null}
        <SnackBar show={show}>
          <SnackBarImage></SnackBarImage>
          <SnackBarDescription>{error}</SnackBarDescription>
        </SnackBar>
      </div>
    );
  }
}

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  isSended: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

export default Main;
