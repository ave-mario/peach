import { connect } from 'react-redux';
import MainPage from '../components/main_page';
import Actions from '../actions/sign_in.actions';

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(Actions.Creators.logout());
    },
  };
};

const MainPageContainer = connect(
  null,
  mapDispatchToProps,
  Actions.Types.logout,
)(MainPage);

export default MainPageContainer;
