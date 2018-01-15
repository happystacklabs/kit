import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import ComponentViewer from './appComponents/ComponentViewer/ComponentViewer';
import './App.css';
import Navigation from './appComponents/Navigation';
import Home from './appComponents/Home';
import components from './componentsConfig';


function App() {
  const routes = components.map((component) => {
    const route = { name: component.name, path: component.path };
    return route;
  });

  return (
    <Router>
      <div className="app">
        <Navigation routes={routes} />
        <div className="app__container">
          {components.map(component => ((
            <Route
              key={component.name}
              exact
              path={component.path}
              render={() => (
                <div className="app__padding">
                  <ComponentViewer options={component.options} name={component.name}>
                    {component.code}
                  </ComponentViewer>
                </div>
              )}
            />
          )))}
          <Route exact path="/" render={() => (<Home />)} />
        </div>
      </div>
    </Router>
  );
}

export default App;
