import React from 'react';
import './Home.css';
import Text from '../../components/Text/Text';


function Home() {
  return (
    <div className="home">
      <img className="home__logo" alt="Happystack" src="/images/happystack@2x.png" width="150" />
      <Text element="h1" size="display-xlarge">Happystack Kit</Text>
      <img className="home__badge" alt="version" src="https://img.shields.io/badge/Version-0.6.1-green.svg?style=flat" />
      <img className="home__badge" alt="license" src="https://img.shields.io/github/license/mashape/apistatus.svg" />
      <Text element="h4" size="display-small">Kit is a React component library created by Happystack to help streamline your development.</Text>
      <Text element="h3" size="display-medium">Installation:</Text>
      <Text element="p">You&apos;ll need npm to install Kit <a href="https://www.npmjs.com/" target="blank">npm</a>:</Text>
      <pre>
        <Text color="ink-light">npm install @happystack/kit --save</Text>
      </pre>
      <Text element="h3" size="display-medium">Usage:</Text>
      <Text element="p">Import the component you want from Kit:</Text>
      <pre>
        <Text color="ink-light">import { Text } from &apos;@happystack/kit&apos;;</Text>
      </pre>
      <Text element="p">You can now use this component inside your React application:</Text>
      <pre>
        <Text color="ink-light">{'<Text>Happystack is awesome!</Text>'}</Text>
      </pre>
      <Text element="h2" size="display-large">Licenses</Text>
      <ul>
        <li><Text>Source code is licensed under <a href="https://opensource.org/licenses/MIT" target="blank">MIT</a></Text></li>
        <li><Text>Icons from FontAwesome <a href="http://creativecommons.org/licenses/by-nd/4.0/" target="blank">Creative Commons Attribution-NoDerivatives 4.0</a></Text></li>
      </ul>
      <Text element="h2" size="display-large">Feedback</Text>
      <Text><a href="https://github.com/happystacklabs/kit/issues/new" target="blank">Create an issue or feature request.</a></Text>
    </div>
  );
}


export default Home;
