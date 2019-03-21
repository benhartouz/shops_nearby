import React from 'react';
import { shallow } from 'enzyme';
import MyComponent from '../src/Components/shop';
describe('MyComponent', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<MyComponent debug />);
  
    expect(component).toMatchSnapshot();
  });
});