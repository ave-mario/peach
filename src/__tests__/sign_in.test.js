import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../components/sign_in';
import SignInForm from '../components/sign_in/form';
import faker from 'faker';

describe('SignIn form:', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const fakePhoneNumber = faker.phone.phoneNumber;
  const props = {
    show: false,
    close: jest.fn(),
    attemtLogin: jest.fn(),
  };

  it('component renders correctly', () => {
    const SignInComponent = renderer.create(<SignIn {...props} />).toJSON();
    expect(SignInComponent).toMatchSnapshot();
  });

  it('component renders correctly', () => {
    let newProps = {
      ...props,
      show: true,
    };
    const SignInComponent = renderer.create(<SignIn {...newProps} />).toJSON();
    expect(SignInComponent).toMatchSnapshot();
  });

  it('component doesnt render by default', () => {
    const SignInComponent = mount(<SignIn {...props} />);
    expect(SignInComponent.prop('show')).toEqual(false);
  });
});
