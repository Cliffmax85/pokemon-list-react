import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Pokemon from './Pokemon';

function App() {
  return (
    <Router>
      <div className="App">Hello
        <Switch>
          <Route exact path='/'>
            <Pokemon />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
