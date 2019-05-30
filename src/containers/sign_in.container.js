import { connect } from 'react-redux';
import SignIn from '../components/sign_in';
import Actions from '../actions/sign_in.actions';

const loginCode = '123456'; // /////will redo after impl on server///////

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    attemtLogin: phoneNumber =>
      dispatch(
        Actions.Creators.loginRequest({
          phoneNumber,
          loginCode,
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
