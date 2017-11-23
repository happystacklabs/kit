import React from 'react';
import './Branding.css';
import Text from '../../components/Text';


const Branding = ({ name, url }) => {
  return (
    <div className='branding'>
      <a href='/' className='logo'><img src='./images/logo@2x.png'/></a>
      <Text element='h1' weight='bold' size='regular'>{name}</Text>
      <Text color='purple'>| <a href={url}><Text color='purple'>Repo</Text></a></Text>
      <div className='clear'></div>
    </div>
  );
};

export default Branding;
