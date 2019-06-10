import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from 'shared/buttons.css';
import 'jest-styled-components';

describe('Buttons:', () => {
  it('component rednders correctly', () => {
    const ButtonComponent = renderer.create(<Button />).toJSON();
    expect(ButtonComponent).toMatchSnapshot();
  });

  it('check cancel button styles', () => {
    const ButtonComponent = renderer.create(<Button cancel />).toJSON();
    expect(ButtonComponent).toHaveStyleRule('color', 'red');
  });
});
