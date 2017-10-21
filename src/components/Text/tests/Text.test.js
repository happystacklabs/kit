import React from 'react';
import Text from ".."


describe('Text', () => {
  it('show the children in text', () => {
    const text = shallow(<Text>foo</Text>);
    expect(text.text()).toBe('foo');
  });

  it('can be empty', () => {
    const text = shallow(<Text></Text>);
    expect(text.text()).toBe('');
  });

  it('show the span type by default', () => {
    const text = shallow(<Text>foo</Text>);
    expect(text.type()).toBe('span');
  });


  it('show the p type when given by props', () => {
    const text = shallow(
      <Text
        element="p"
      >
        foo
      </Text>
    );
    expect(text.type()).toBe('p');
  });
});
