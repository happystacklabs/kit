import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Navigation.css';
import Text from '../../components/Text/Text';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import Branding from '../Branding';


const propTypes = {
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};


class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  mobileToggle = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  render() {
    // sort the routes prop in alphabetic order
    this.props.routes.sort((a, b) => a.name.localeCompare(b.name));

    return (
      <nav className={classNames({ 'navigation--mobile-open': this.state.open }, 'navigation')}>
        <Branding name="Kit" url="https://github.com/happystacklabs/kit" />
        <div className="navigation__mobile-menu">
          <Button className="navigation__mobile-button" plain onClick={this.mobileToggle} >
            <Icon name={this.state.open ? 'chevron-up' : 'chevron-down'} />
          </Button>
        </div>
        <div className="navigation__content">
          <ul className="navigation__ul">
            {this.props.routes.map(route => (
              <li className="navigation__li" key={route.path}>
                <NavLink
                  className="navigation__link"
                  to={route.path}
                  activeClassName="navigation__link--active"
                  onClick={this.mobileToggle}
                >
                  <Text color="ink-light">{route.name}</Text>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    );
  }
}


Navigation.propTypes = propTypes;


export default Navigation;
