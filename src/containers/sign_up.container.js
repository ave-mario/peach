import { connect } from 'react-redux';
import SignUp from '../components/sign_up';
import Actions from '../actions/sign_up.actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    attemtToSignUp: (email, phoneNumber, name, surname) =>
      dispatch(
        Actions.Creators.signUpRequest({
          email,
          phoneNumber,
          name,
          surname,
        }),
      ),
  };
};

const SignUpContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  Actions.Types.signUpRequest,
)(SignUp);

export default SignUpContainer;
