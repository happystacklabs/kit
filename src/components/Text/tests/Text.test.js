import React from 'react';
import { shallow } from 'enzyme';
import Text from ".."


describe('Text', () => {
  it('show the children in text', () => {
    const wrapper = shallow(<Text>foo</Text>);
    expect(wrapper.text()).toBe("foo");
  });
});
