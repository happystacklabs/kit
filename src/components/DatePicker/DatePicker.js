import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import Icon from '../Icon/Icon';
import './DatePicker.css';


const propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  range: PropTypes.bool,
  onChange: PropTypes.func,
  from: PropTypes.string,
  to: PropTypes.string,
};


const defaultProps = {
  id: undefined,
  value: undefined,
  range: false,
  onChange: undefined,
  from: undefined,
  to: undefined,
};


class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: this.props.from,
      to: this.props.to,
    };
  }

  componentWillReceiveProps(nextProps) {
    // This is a code smell. It's telling you that the props are more
    // important than the state and that you should lose one of them.
    this.setState({ from: nextProps.from, to: nextProps.to });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  focusTo() {
    // Focus to `to` field. A timeout is required here because the overlays
    // already set timeouts to work well with input fields
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0);
  }

  handleChange = (event) => {
    if (this.props.onChange === null) { return; }
    this.props.onChange({ id: this.props.id, value: event, type: 'date' });
  };

  handleFromChange = (event) => {
    if (this.props.onChange === null) { return; }
    this.props.onChange({ id: this.props.id, value: event, type: 'from' });
    this.setState({ from: event }, () => {
      if (!this.state.to) {
        this.focusTo();
      }
    });
  };

  handleToChange = (event) => {
    if (this.props.onChange === null) { return; }
    this.props.onChange({ id: this.props.id, value: event, type: 'to' });
    this.setState({ to: event }, this.showFromMonth);
  };

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  renderInputs = () => {
    if (this.props.range) {
      const { from, to } = this.state;
      const modifiers = { start: from, end: to };
      return (
        <div className="datepicker__range datepicker__input">
          <DayPickerInput
            onDayChange={this.handleFromChange}
            value={this.state.from}
            placeholder="From"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: this.props.to,
            modifiers,
            numberOfMonths: 2,
          }}
          />
          <Icon name="long-arrow-alt-right" color="ink" size="sm" />
          <DayPickerInput
            onDayChange={this.handleToChange}
            value={this.state.to}
            ref={(ref) => { this.to = ref; }}
            placeholder="To"
            format="LL"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, { from, to }],
              disabledDays: { before: from },
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
          />
        </div>
      );
    }
    return (
      <div className="datepicker__input datepicker__singleinput">
        <DayPickerInput
          onDayChange={this.handleChange}
          format="LL"
          formatDate={formatDate}
          parseDate={parseDate}
          value={this.props.value}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderInputs()}
      </div>
    );
  }
}


DatePicker.propTypes = propTypes;
DatePicker.defaultProps = defaultProps;


export default DatePicker;
