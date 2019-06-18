import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Button, ButtonsGroup } from 'shared/buttons.css';
import {
  Header,
  HeaderImage,
  HeaderHotelName,
  HeaderHotelNameSecondary,
} from 'shared/header.css';
import SignInContainer from 'containers/sign_in.container';
import SignUpContainer from 'containers/sign_up.container';
import { addResourse } from 'config/localization';
import VerificationContainer from 'containers/validation.container';
import {
  SnackBar,
  SnackBarImage,
  SnackBarDescription,
} from 'shared/snackbar.css';
import hotelImageMask from 'utils/hotel_mask.png';
import hotelImage from 'utils/hotel.jpg';
import localization from './localization.main';

addResourse('Main', localization);
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
    const { logout, isAuthenticated, isSended, error, t } = this.props;
    const {
      isShowingSignIn,
      isShowingSignUp,
      isShowingCodeInput,
      show,
    } = this.state;
    return (
      <div>
        {!isAuthenticated ? (
          <ButtonsGroup>
            <Button
              main
              onClick={this.toggleSignInForm}
              className="signInButton"
            >
              {t('Login')}
            </Button>
            <Button
              main
              onClick={this.toggleSignUpForm}
              className="signUpButton"
            >
              {t('SignUp')}
            </Button>
          </ButtonsGroup>
        ) : (
          <ButtonsGroup>
            <Button main onClick={logout} className="logOutButton">
              {t('Logout')}
            </Button>
          </ButtonsGroup>
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

        <Header>
          <HeaderHotelName>
            Ave <HeaderHotelNameSecondary>hotel</HeaderHotelNameSecondary> Mario
          </HeaderHotelName>
          <HeaderImage src={hotelImageMask} />
        </Header>
        <div></div>
        <main style={{ position: 'relative' }}>
          <img
            src={hotelImage}
            alt="someImage"
            style={{ width: '100%', height: 'auto' }}
          />
          <img
            src={hotelImage}
            alt="someImage"
            style={{ width: '100%', height: 'auto' }}
          />
          <SnackBar show={show}>
            <SnackBarImage></SnackBarImage>
            <SnackBarDescription>{error}</SnackBarDescription>
          </SnackBar>
        </main>
      </div>
    );
  }
}

Main.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  isSended: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withTranslation('Main')(Main);
