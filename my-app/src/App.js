import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Cadastro from './Cadastro';
import ListaItens from './ListaItens';

const App = () => {
  const [itens, setItens] = useState([]);

  const adicionarItem = (novoItem) => {
    setItens([...itens, novoItem]);
  };

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
              <Link to="/lista-itens">Lista de Itens</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/cadastro">
            <Cadastro adicionarItem={adicionarItem} />
          </Route>
          <Route path="/lista-itens">
            <ListaItens itens={itens} />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

const Home = () => {
  return <h2>Home</h2>;
};

export default App;
