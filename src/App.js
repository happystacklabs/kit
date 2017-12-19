import React, { Component } from 'react';
import ComponentViewer from './appComponents/ComponentViewer/ComponentViewer';
import './App.css';
import styles from './App.styles';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Navigation from './appComponents/Navigation';
import Home from './appComponents/Home';
import components from './componentsConfig';


class App extends Component {
  render() {
    const routes = components.map((component) => {
      return {name: component.name, path: component.path};
    });
    return (
      <Router>
        <div className={styles.app}>
          <Navigation routes={routes} />
          <div className={styles.container}>
            {components.map((component, index) => (
              <Route
                key={index}
                exact
                path={component.path}
                render={() => (
                  <div className={styles.padding}>
                    <ComponentViewer options={component.options} name={component.name}>
                      {component.code}
                    </ComponentViewer>
                  </div>
                )}
              />
            ))}
            <Route exact path="/" render={() => (<Home />)} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
