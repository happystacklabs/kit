import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Branding.css';
import Text from '../../components/Text/Text';


const propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
};


const defaultProps = {
  name: undefined,
  url: undefined,
};


function Branding({ name, url }) {
  return (
    <div className="branding">
      <a href="http://happystack.io" className="branding__logo">
        <img className="branding__logo-image" alt={name} src="/images/logo@2x.png" />
      </a>
      <Link className="branding__link" to="/"><Text element="h1" bold size="body">{name}</Text></Link>
      <Text color="main">| </Text>
      <a className="branding__link" href={url} target="blank"><Text color="main">Repo</Text></a>
      <div className="clear" />
    </div>
  );
}


Branding.propTypes = propTypes;
Branding.defaultProps = defaultProps;


export default Branding;
