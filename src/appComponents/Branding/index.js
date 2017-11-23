import React from 'react';
import './Branding.css';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';


const Branding = ({ name, url }) => {
  return (
    <div className='branding'>
      <a href='http://happystack.io' className='logo'><img src='/images/logo@2x.png'/></a>
      <Link to='/'><Text element='h1' weight='bold' size='regular'>{name}</Text></Link>
      <Text color='purple'>| </Text>
      <a href={url} target='blank'><Text color='purple'>Repo</Text></a>
      <div className='clear'></div>
    </div>
  );
};

export default Branding;
