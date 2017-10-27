import React from 'react';
import {shallow, mount} from 'enzyme';
import ComponentViewer from ".."
import Button from '../../Button'


describe('example', () => {
  it('show the component passed by children', () => {
    const options = [{ name: 'size', value: 'large' }];
    const viewer = shallow(
      <ComponentViewer options={options}>
        <Button>bar</Button>
      </ComponentViewer>
    );
    expect(viewer.find('Button').first().prop('children')).toBe('bar');
  });
});
