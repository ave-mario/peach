import React from 'react';
import renderer from 'react-test-renderer';
import { Wrapper } from 'shared/snackbar.css';
import 'jest-styled-components';

describe('Snackbar:', () => {
  it('component rednders correctly', () => {
    const wrapper = renderer.create(<Wrapper show />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
