import React from 'react';
import Text from ".."


describe('Text', () => {
  it('show the children in text', () => {
    const text = shallow(
      <Text>foo</Text>
    );
    expect(text.text()).toBe('foo');
  });

  it('can be empty', () => {
    const text = shallow(
      <Text></Text>
    );
    expect(text.text()).toBe('');
  });

  it('show the span type by default', () => {
    const text = shallow(
      <Text>foo</Text>
    );
    expect(text.type()).toBe('span');
  });


  it('show the p type when given by props', () => {
    const text = shallow(
      <Text element="p">foo</Text>
    );
    expect(text.type()).toBe('p');
  });

  it('show the h1 type when given by props', () => {
    const text = shallow(
      <Text element="h1">foo</Text>
    );
    expect(text.type()).toBe('h1');
  });

  it('show the h2 type when given by props', () => {
    const text = shallow(
      <Text element="h2">foo</Text>
    );
    expect(text.type()).toBe('h2');
  });

  it('show the h3 type when given by props', () => {
    const text = shallow(
      <Text element="h3">foo</Text>
    );
    expect(text.type()).toBe('h3');
  });

  it('show the h4 type when given by props', () => {
    const text = shallow(
      <Text element="h4">foo</Text>
    );
    expect(text.type()).toBe('h4');
  });

  it('show the h5 type when given by props', () => {
    const text = shallow(
      <Text element="h5">foo</Text>
    );
    expect(text.type()).toBe('h5');
  });

  it('show the h6 type when given by props', () => {
    const text = shallow(
      <Text element="h6">foo</Text>
    );
    expect(text.type()).toBe('h6');
  });

  it('show the regular size by default', () => {
    const text = shallow(
      <Text>foo</Text>
    );
    expect(text.hasClass('sizeRegular')).toBe(true);
  });

});
