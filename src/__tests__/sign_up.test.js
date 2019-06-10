import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignUp from '../components/sign_up';
import faker from 'faker';

describe('SignUp from:', () => {
  Enzyme.configure({ adapter: new Adapter() });
  const fakePhoneNumber = faker.phone.phoneNumber;
  const fakeName = faker.name.firstName;
  const fakeSurname = faker.name.lastName;
  const props = {
    show: false,
    close: jest.fn(),
    attemtToSignUp: jest.fn(),
  };

  it('component renders correctly', () => {
    const SignUpComponent = renderer.create(<SignUp {...props} />);
    expect(SignUpComponent).toMatchSnapshot();
  });

  it('component renders correctly', () => {
    let newProps = {
      ...props,
      show: true,
    };
    const SignUpComponent = renderer.create(<SignUp {...newProps} />).toJSON();
    expect(SignUpComponent).toMatchSnapshot();
  });

  it('component doesnt render by default', () => {
    const SignUpComponent = mount(<SignUp {...props} />);
    expect(SignUpComponent.prop('show')).toEqual(false);
  });
});
