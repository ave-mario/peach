import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import Verification from 'components/verification';
import 'jest-styled-components';

describe('OTP input:', () => {
  const props = {
    show: false,
    close: jest.fn(),
    attemtLogin: jest.fn(),
    phoneNumber: '',
    attemtGetCode: jest.fn(),
  };
  Enzyme.configure({ adapter: new Adapter() });
  it('component renders correctly', () => {
    const wrapper = renderer.create(<Verification {...props} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('event triggers correctly', () => {
    const wrapper = shallow(<Verification {...props} />);
    const values = { loginCode: '123456' };
    wrapper.simulate('submit', values);
    expect(props.attemtLogin).toHaveBeenCalled();
  });
});
