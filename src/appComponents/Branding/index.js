import React from 'react';
import './Branding.css';
import Text from '../../components/Text';


const Branding = ({name, subtitle}) => {
  return (
    <div className='branding'>
      <img src='./images/logo@2x.png'/>
      <Text element='h1' size='medium'>{name}</Text>
      <Text color='purple'>{subtitle}</Text>
    </div>
  );
};

export default Branding;
