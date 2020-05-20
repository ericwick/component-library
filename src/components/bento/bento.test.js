import React from 'react';
import { shallow } from 'enzyme';
import Bento from './bento';

let component;
let trigger;

describe('Bento', () => {
  beforeEach(() => {
    component = shallow(<Bento />);
  });

  it('should render', () => {
    expect(component).toBeTruthy();
  });
});
