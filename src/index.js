import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import RegisterVideo from './pages/cadastro/video';
import RegisterCategory from './pages/cadastro/categoria';

const page404 = () => (
  <div>
    Página 404
  </div>
)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/video" component={RegisterVideo} />
      <Route path="/cadastro/category" component={RegisterCategory} />

      <Route component={page404} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);
