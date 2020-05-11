import * as React from 'react';
import { shallow } from 'enzyme';
import TopBar from './top-bar';

describe('<TopBar />', () => {
  test('renders', () => {
    const wrapper = shallow(<TopBar />);
    expect(wrapper).toMatchSnapshot();
  });
});
