import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/app';
import BinsMain from './components/bins/bins_main'
import BinsList from './components/bins/bins_list'

const routes = (
  <BrowserRouter>
    <App>
      <Switch>
        <Route path="/bins/:binId" component={BinsMain}/>
        <Route path="/" component={BinsList}/>
      </Switch>
    </App>
  </BrowserRouter>

);

Meteor.startup(() => {
  ReactDOM.render(routes, document.querySelector('.render-target'));
});
