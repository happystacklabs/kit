import React from 'react';
import { shallow, mount } from 'enzyme';
import Dropzone from '../Dropzone';


describe('Dropzone', () => {
  it('set all props', () => {
    const dropzone = shallow((
      <Dropzone
        name="Foo"
        multiple
      />
    ));
    expect(dropzone.find('input').at(0).prop('name')).toBe('Foo');
    expect(dropzone.find('input').at(0).prop('multiple')).toBe(true);
  });

  it('should have a file input', () => {
    const dropzone = shallow(<Dropzone />);
    expect(dropzone.find('input').first().props().type).toBe('file');
  });

  it('call selectFile when clicked', () => {
    const dropzone = mount(<Dropzone />);
    const spy = jest.spyOn(dropzone.instance(), 'selectFile');
    dropzone.instance().forceUpdate();
    dropzone.find('div').at(1).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  describe('dragAndDrop', () => {
    it('add the hover class when file is dragged over', () => {
      const dropzone = mount(<Dropzone />);
      const mockEvent = { type: 'dragover' };
      dropzone.instance().handleDragOver(mockEvent);
      dropzone.update();
      expect(dropzone.find('div').at(0).hasClass('kit-dropzone--dragover')).toBe(true);
    });
  });

  describe('multiple', () => {
    it('show an error if two files are passed when multiple is false', () => {

    });

    it('doesnt call onChange when two files are passed if multiple is false', () => {

    });

    it('should change the error state back to normal once resend file if multiple is false', () => {

    });
  });

  describe('onChange()', () => {
    it('is called with the new value', () => {
      const spy = jest.fn();
      const dropzone = mount(<Dropzone name="Bar" onChange={spy} />);
      const event = {
        target: {
          files: {
            0: { name: 'foo' },
          },
        },
      };
      dropzone.instance().handleFileSelect(event);
      dropzone.update();
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0]).toEqual({ name: 'Bar', value: [{ name: 'foo' }] });
    });
  });
});
