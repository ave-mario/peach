import { connect } from 'react-redux';
import MainPage from 'components/main_page';
import Actions from 'actions/sign_in.actions';

const mapStateToProps = state => ({
  isAuthenticated: state.login.isAuthenticated,
  isSended: state.login.isSended,
  error: state.login.error,
});

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(Actions.Creators.logout());
    },
  };
};

const MainPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  Actions.Types.logout,
)(MainPage);

export default MainPageContainer;
