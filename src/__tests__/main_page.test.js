import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPage from '../components/main_page';
import SignInContainer from '../containers/sign_in.container';
import SignUpContainer from '../containers/sign_up.container';
import faker from 'faker';

describe('Main Page:', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const props = {
    isAuthenticated: false,
    logout: jest.fn(),
  };
  it('correctly triggers event when button clicked', () => {
    const MainPageComponent = shallow(<MainPage {...props} />);
    MainPageComponent.find('.signInButton').simulate('click');
    expect(MainPageComponent.state().isShowingSignIn).toEqual(true);
    expect(MainPageComponent.state().isShowingSignUp).toEqual(false);
  });
  it('correctly triggers event when button clicked', () => {
    const MainPageComponent = shallow(<MainPage {...props} />);
    MainPageComponent.find('.signUpButton').simulate('click');
    expect(MainPageComponent.state().isShowingSignIn).toEqual(false);
    expect(MainPageComponent.state().isShowingSignUp).toEqual(true);
  });
});
