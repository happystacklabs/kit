import React from 'react';
import './Home.css';
import styles from './Home.styles';
import Text from '../../components/Text';



const Home = () => {

  return (
    <div className={styles.home}>
      <img className={styles.logo} src='/images/happystack@2x.png' width='150' width='150'/>
      <Text element='h1' size='extraLarge' weight='bold'>Happystack Kit</Text>
      <img className={styles.badge} src='https://img.shields.io/badge/Version-0.2.8-green.svg?style=flat'/>
      <img className={styles.badge} src='https://img.shields.io/github/license/mashape/apistatus.svg'/>
      <Text element='h4' size='regular' weight='bold'>Kit is a React component library created by Happystack to help streamline your development.</Text>
      <Text element='h3' size='medium' weight='bold'>Installation:</Text>
      <Text element='p'>You&apos;ll need npm to install Kit <a href='https://www.npmjs.com/' target='blank'>npm</a>:</Text>
      <pre>
        <Text color='inkLight'>npm install @happystack/kit --save</Text>
      </pre>
      <Text element='h3' size='medium' weight='bold'>Usage:</Text>
      <Text element='p'>Import the component you want from Kit:</Text>
      <pre>
        <Text color='inkLight'>{`import { Text } from '@happystack/kit';`}</Text>
      </pre>
      <Text element='p'>You can now use this component inside your React application:</Text>
      <pre>
        <Text color='inkLight'>{`<Text>Happystack is awesome!</Text>`}</Text>
      </pre>
      <Text element='h2' size='large' weight='bold'>Licenses</Text>
      <ul>
        <li><Text>Source code is licensed under <a href='https://opensource.org/licenses/MIT' target='blank'>MIT</a></Text></li>
        <li><Text>Icons from FontAwesome <a href='http://creativecommons.org/licenses/by-nd/4.0/' target='blank'>Creative Commons Attribution-NoDerivatives 4.0</a></Text></li>
      </ul>
      <Text element='h2' size='large' weight='bold'>Feedback</Text>
      <Text><a href='https://github.com/happystacklabs/kit/issues/new' target='blank'>Create an issue or feature request.</a></Text>
    </div>
  );
};

export default Home;
