import React from 'react';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MainPageContainer from '../containers/main_page.container';
import faker from 'faker';

describe('App:', () => {
  Enzyme.configure({ adapter: new Adapter() });

  it('containst all components', () => {
    const App = shallow(
      <div>
        <MainPageContainer />
      </div>,
    );
    expect(App.contains(<MainPageContainer />)).toEqual(true);
  });
});
