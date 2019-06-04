import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SignIn from '../components/sign_in';
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

  it('inputs send value to state', () => {
    const SignInComponent = shallow(<SignIn {...props} />);
    SignInComponent.find('.phoneNumber').simulate('change', {
      target: { name: 'phoneNumber', value: fakePhoneNumber },
    });
    expect(SignInComponent.state('phoneNumber')).toEqual(fakePhoneNumber);
  });

  it('when form submited - prevent default', () => {
    const SignInComponent = shallow(<SignIn {...props} />);
    let prevented = false;
    SignInComponent.find('.formBody').simulate('submit', {
      preventDefault: () => {
        prevented = true;
      },
    });
    expect(prevented).toBe(true);
  });
});
