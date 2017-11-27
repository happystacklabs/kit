import React from 'react';
import styles from './Navigation.css';
import Text from '../../components/Text';
import Branding from '../Branding';
import { NavLink } from 'react-router-dom';



const Navigation = ({routes}) => {
  routes.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <nav className={styles.navigationBar}>
      <Branding name='Kit' url='https://github.com/happystacklabs/kit'/>
      <div>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path} activeClassName={styles.active}>
                <Text color='inkLight'>{route.name}</Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
