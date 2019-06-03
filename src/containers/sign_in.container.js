import { connect } from 'react-redux';
import SignIn from '../components/sign_in';
import Actions from '../actions/sign_in.actions';

// TODO: redo loginCode after implementing at API
const loginCode = '123456';

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
