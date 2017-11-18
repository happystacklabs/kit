import React from 'react';
import './Navigation.css';
import Text from '../../components/Text';
import { NavLink } from 'react-router-dom';



const Navigation = ({routes}) => {
  routes.sort((a, b) => a.name.localeCompare(b.name));
  return (
    <nav className='navigationBar'>
      <div className='branding'>
        <img src='./images/logo@2x.png'/>
        <Text element='h1' size='medium'>Kit</Text>
        <Text color='purple'>Docs</Text>
      </div>
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
