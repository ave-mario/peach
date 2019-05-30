import { connect } from 'react-redux';
import SignUp from '../components/sign_up';
import Actions from '../actions/sign_up.actions';

const email = '1234567@gmail.com'; // /////will redo after impl on server///////

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
