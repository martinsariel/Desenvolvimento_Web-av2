import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cadastro from './Cadastro';
import Listagem from './Listagem';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cadastro">Cadastro</Link>
            </li>
            <li>
              <Link to="/listagem">Listagem</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/listagem" component={Listagem} />
          <Route exact path="/" component={Home} /> 
          <Route path="*" component={NotFound} /> 
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

const NotFound = () => {
  return <h2>Página não encontrada</h2>;
};

export default App;
