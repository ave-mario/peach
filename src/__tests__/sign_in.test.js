import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from 'components/sign_in';

describe('SignIn form:', () => {
  Enzyme.configure({ adapter: new Adapter() });
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
