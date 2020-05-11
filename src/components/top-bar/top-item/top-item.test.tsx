import * as React from 'react';
import { shallow } from 'enzyme';
import TopItem from './top-item';

describe('<TopItem />', () => {
  test('renders', () => {
    const wrapper = shallow(<TopItem />);
    expect(wrapper).toMatchSnapshot();
  });
});
