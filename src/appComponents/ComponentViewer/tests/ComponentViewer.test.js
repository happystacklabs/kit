import React from 'react';
import { shallow } from 'enzyme';
import ComponentViewer from '../ComponentViewer';
import Button from '../../../components/Button/Button';


describe('ComponentViewerRow', () => {

});

describe('ComponentViewerList', () => {

});

describe('ComponentViewerCode', () => {

});

describe('ComponentViewer', () => {
  describe('example', () => {
    it('show the component passed by children', () => {
      const options = [{ name: 'size', value: 'large' }];
      const viewer = shallow((
        <ComponentViewer options={options} name="Button">
          <Button>bar</Button>
        </ComponentViewer>
      ));
      expect(viewer.find('Button').first().prop('children')).toBe('bar');
    });
  });
});
