import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button } from 'shared/buttons.css';
import SignInContainer from 'containers/sign_in.container';
import SignUpContainer from 'containers/sign_up.container';

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
    const { logout, isAuthenticated, t } = this.props;
    const { isShowingSignIn, isShowingSignUp } = this.state;
    return (
      <div>
        {!isAuthenticated ? (
          <div>
            <Button onClick={this.toggleSignInForm} className="signInButton">
              {t('Login')}
            </Button>
            <Button onClick={this.toggleSignUpForm} className="signUpButton">
              {t('SignUp')}
            </Button>
          </div>
        ) : null}
        {isAuthenticated ? (
          <Button onClick={logout} className="logOutButton">
            {t('Logout')}
          </Button>
        ) : null}
        {isShowingSignIn ? (
          <SignInContainer
            handleSubmit={this.submitForm}
            close={this.toggleSignInForm}
          />
        ) : null}
        {isShowingSignUp ? (
          <SignUpContainer close={this.toggleSignUpForm} />
        ) : null}
      </div>
    );
  }
}

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('buttons')(Main);
