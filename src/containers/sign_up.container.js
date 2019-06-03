import { connect } from 'react-redux';
import SignUp from '../components/sign_up';
import Actions from '../actions/sign_up.actions';

// TODO: user should be able to choose between email/phoneNumber
const email = '1234567@gmail.com';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    attemtToSignUp: (phoneNumber, name, surname) =>
      dispatch(
        Actions.Creators.signUpRequest({
          phoneNumber,
          name,
          surname,
          email,
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
