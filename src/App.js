import React, { Component } from 'react';
import ComponentViewer from './components/ComponentViewer/ComponentViewer';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Navigation from './appComponents/Navigation';
import components from './componentsConfig';


class App extends Component {
  render() {
    const routes =  components.map((component) => {
      return {name: component.name, path: component.path};
    });
    return (
      <Router>
        <div className="app">
          <Navigation routes={routes}/>
          <div className='container'>
            {components.map((component, index) => (
              <Route key={index} exact path={component.path} render={() => (
                <ComponentViewer options={component.options} name={component.name}>
                  {component.code}
                </ComponentViewer>
              )}/>
            ))}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
