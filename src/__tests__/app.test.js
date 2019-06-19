import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPageContainer from 'containers/main_page.container';
import App from 'App';

describe('App:', () => {
  Enzyme.configure({ adapter: new Adapter() });

  it('renders without crahing', () => {
    shallow(<App />);
  });
});
