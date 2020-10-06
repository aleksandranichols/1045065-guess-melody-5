import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeScreen from './welcome-screen';
import Login from './login';
import ResultSuccess from './result-success';
import ResultFail from './result-fail';

const App = (props) => {
  const {errorCount} = props;

  return <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <WelcomeScreen errorCount={errorCount} />
      </Route>
      <Route path='/login' exact>
        <Login />
      </Route>
      <Route path='/result' exact>
        <ResultSuccess />
      </Route>
      <Route path='/lose' exact>
        <ResultFail />
      </Route>
      <Route path='/dev-artist' exact>
      </Route>
      <Route path='/dev-genre' exact>
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
