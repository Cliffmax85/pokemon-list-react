import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import PokemonDetail from './PokemonDetail';
import PokemonPage from './PokemonPage';

function App() {
  return (
    <Router>
      <div className="App">Hello
        <Switch>
          <Route exact path='/'>
            <PokemonPage /> </Route>
          <Route exact path='/pokemon/:id'>
            <PokemonDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
