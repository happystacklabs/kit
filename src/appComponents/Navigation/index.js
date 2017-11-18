import React from 'react';
import './Navigation.css';
import Text from '../../components/Text';


const Navigation = () => (
  <nav className='navigationBar'>
    <div className='branding'>
      <img src='./images/logo@2x.png'/>
      <Text element='h1' size='medium'>Kit</Text>
      <Text color='purple'>Docs</Text>
    </div>
    <div>
      <ul>
        <li><Text>menu 1</Text></li>
        <li><Text>menu 1</Text></li>
        <li><Text>menu 1</Text></li>
      </ul>
    </div>
  </nav>
);

export default Navigation;
