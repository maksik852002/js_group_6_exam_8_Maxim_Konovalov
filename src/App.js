import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './containers/MainPage/MainPage';
import SubmitQuotes from './containers/SubmitQuotes/SubmitQuotes';

import './bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={MainPage}/>
      <Route path='/quotes/:id/edit' component={SubmitQuotes}/>
      <Route path='/quotes/:name' component={MainPage}/>
      <Route path='/quotes' component={MainPage}/>
      <Route path='/add-quotes' component={SubmitQuotes}/>
      <Route render={() => <h1>Not found</h1>}/>
    </Switch>
  </BrowserRouter>
);

export default App;
