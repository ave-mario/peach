import { connect } from 'react-redux';
import SignIn from 'components/sign_in';
import Actions from 'actions/verification.actons';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    attemtLogin: phoneNumber =>
      dispatch(
        Actions.Creators.codeRequest({
          phoneNumber,
        }),
      ),
  };
};

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  Actions.Types.loginRequest,
)(SignIn);

export default SignInContainer;
