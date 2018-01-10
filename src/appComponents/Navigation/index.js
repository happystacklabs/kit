import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navigation.css';
import styles from './Navigation.styles';
import Text from '../../components/Text/Text';
import Branding from '../Branding';


const propTypes = {
  routes: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};


function Navigation({ routes }) {
  // sort the routes prop in alphabetic order
  routes.sort((a, b) => a.name.localeCompare(b.name));

  return (
    <nav className={styles.navigationBar}>
      <Branding name="Kit" url="https://github.com/happystacklabs/kit" />
      <div>
        <ul>
          {routes.map(route => (
            <li key={route.path}>
              <NavLink to={route.path} activeClassName={styles.active}>
                <Text color="inkLight">{route.name}</Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}


Navigation.propTypes = propTypes;


export default Navigation;
