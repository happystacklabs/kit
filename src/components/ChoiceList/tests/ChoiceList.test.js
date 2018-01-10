import React from 'react';
import { shallow, mount } from 'enzyme';
import ChoiceList from '../ChoiceList';


describe('ChoiceList', () => {
  let choices = [];

  beforeEach(() => {
    choices = [
      { label: 'One', value: 'one' },
      { label: 'Two', value: 'two' },
      { label: 'Three', value: 'three' },
    ];
  });

  it('renders a fieldset', () => {
    const choiceList = shallow(<ChoiceList name="Foo" choices={choices} />);
    expect(choiceList.find('fieldset').exists()).toBe(true);
  });

  describe('title', () => {
    it('show a title legend for the fieldset', () => {
      const choiceList = mount(<ChoiceList name="Foo" title="Foo" choices={choices} />);
      expect(choiceList.find('legend').text()).toBe('Foo');
    });
  });

  describe('choices', () => {
    it('it renders a choice with the label', () => {
      const choiceList = mount(<ChoiceList name="Foo" title="Foo" choices={choices} />);
      expect(choiceList.find('label').at(0).text()).toBe('One');
    });

    it('passed the helptext', () => {
      choices[0].helpText = 'Bar';
      const choiceList = mount(<ChoiceList name="Foo" title="Foo" choices={choices} />);
      expect(choiceList.find('.kit-Checkbox__helpText').text()).toBe('Bar');
    });
  });

  describe('multiple', () => {
    it('change the input type to checkbox', () => {
      const choiceList = mount((
        <ChoiceList name="Foo" title="Foo" choices={choices} multiple />
      ));
      expect(choiceList.find('input').first().prop('type')).toBe('checkbox');
    });
  });

  describe('selected', () => {
    it('select the appropriate choice', () => {
      const choiceList = mount((
        <ChoiceList name="Foo" title="Foo" choices={choices} selected={['one']} />
      ));
      expect(choiceList.find('input').first().prop('checked')).toBe(true);
    });

    it('can select multiple choices', () => {
      let selected = [];
      const spy = jest.fn((event) => {
        selected = event.value;
      });
      const choiceList = mount((
        <ChoiceList
          name="Foo"
          title="Foo"
          choices={choices}
          selected={['one']}
          multiple
          onChange={spy}
        />
      ));
      choiceList.find('input').at(0).simulate('change');
      expect(spy).toHaveBeenCalled();
      expect(selected).toEqual([]);
      choiceList.setProps({ selected });
      choiceList.find('input').at(1).simulate('change');
      expect(selected).toEqual(['two']);
    });
  });

  describe('disabled', () => {
    it('disabled all inputs', () => {
      const choiceList = mount((
        <ChoiceList name="Foo" title="Foo" choices={choices} disabled />
      ));
      expect(choiceList.find('input').first().prop('disabled')).toBe(true);
    });
  });
});
