import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import WelcomeScreen from './welcome-screen';
import Login from './login';
import ResultSuccess from './result-success';
import ResultFail from './result-fail';
import GameScreen from './game-screen';
import ArtistGame from './artist-game';
import GenreGame from './genre-game';

const App = (props) => {
  const {errorCount, games} = props;

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
      <Route path='/game' exact>
        <GameScreen games={games} />
      </Route>
      <Route path='/artist' exact>
        <ArtistGame />
      </Route>
      <Route path='/genre' exact>
        <GenreGame />
      </Route>
      <Route>
        <h1>404</h1>
      </Route>
    </Switch>
  </BrowserRouter>;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  games: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        style: PropTypes.string,
        songs: PropTypes.arrayOf(
            PropTypes.shape({
              src: PropTypes.string.isRequired,
              artist: PropTypes.string,
              style: PropTypes.string
            }).isRequired
        ),
        answers: PropTypes.arrayOf(
            PropTypes.shape({
              artist: PropTypes.string.isRequired,
              picture: PropTypes.string.isRequired
            }).isRequired
        )
      })
  )
};

export default App;
