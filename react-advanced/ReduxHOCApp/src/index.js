import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

import requireAuth from './components/require_authentication';
import App from './components/app';
import Resources from './components/resources';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route path="/resources" component={requireAuth(Resources)}/>
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
