import { connect } from 'react-redux';
import OneTimePassword from 'components/verification';
import Actions from 'actions/sign_in.actions';

const mapStateToProps = state => ({
  phoneNumber: state.login.data.phoneNumber,
});

const mapDispatchToProps = dispatch => {
  return {
    attemtLogin: (phoneNumber, loginCode) =>
      dispatch(
        Actions.Creators.loginRequest({
          phoneNumber,
          loginCode,
        }),
      ),
  };
};

const VerificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  Actions.Types.loginRequest,
)(OneTimePassword);

export default VerificationContainer;
