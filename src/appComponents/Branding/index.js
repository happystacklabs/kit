import React from 'react';
import './Branding.css';
import styles from './Branding.styles';
import Text from '../../components/Text';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const propTypes = {
  name: PropTypes.string,
  url: PropTypes.string
};

function Branding({ name, url }) {
  return (
    <div className={styles.branding}>
      <a href='http://happystack.io' className={styles.logo}><img alt={name} src='/images/logo@2x.png'/></a>
      <Link to='/'><Text element='h1' weight='bold' size='regular'>{name}</Text></Link>
      <Text color='purple'>| </Text>
      <a href={url} target='blank'><Text color='purple'>Repo</Text></a>
      <div className={styles.clear}></div>
    </div>
  );
};

Branding.propTypes = propTypes;

export default Branding;
