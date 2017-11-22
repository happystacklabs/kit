import React from 'react';
import './Navigation.css';
import Text from '../../components/Text';
import Branding from '../Branding';
import { NavLink } from 'react-router-dom';



const Navigation = ({routes}) => {
  routes.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <nav className='navigationBar'>
      <Branding name='Kit' subtitle='Docs'/>
      <div>
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <NavLink to={route.path}>
                <Text>{route.name}</Text>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
