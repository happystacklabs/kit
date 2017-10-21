import React from 'react';
import { shallow } from 'enzyme';
import Text from ".."


describe('Text', () => {
  it('show the children in text', () => {
    const text = shallow(<Text>foo</Text>);
    expect(text.text()).toBe("foo");
  });
});
