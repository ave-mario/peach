import { connect } from 'react-redux';
import OneTimePassword from 'components/verification';
import Actions from 'actions/sign_in.actions';
import CodeActions from 'actions/verification.actons';

const mapStateToProps = state => ({
  phoneNumber: state.login.data.phoneNumber,
});

const mapDispatchToProps = dispatch => {
  return {
    attemtLogin: (phoneNumber, loginCode) =>
      dispatch(
        Actions.Creators.signInRequest({
          phoneNumber,
          loginCode,
        }),
      ),
    attemtGetCode: phoneNumber =>
      dispatch(
        CodeActions.Creators.codeRequest({
          phoneNumber,
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
