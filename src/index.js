import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import App from './components/app';
import {games} from './mocks/questions.js';

const ERROR_COUNT = 3;

ReactDOM.render(
    <App errorCount={ERROR_COUNT}
      games={games}
    />,
    document.getElementById(`root`)
);

App.propTypes = {
  errorCount: PropTypes.number.isRequired,
  games: PropTypes.shape({
    type: PropTypes.string.isRequired,
    style: PropTypes.string,
    songs: PropTypes.arrayOf(
        PropTypes.shape({
          src: PropTypes.string.isRequired,
          artist: PropTypes.string,
          style: PropTypes.string
        }).isRequired
    ),
    answers: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    }),
  })
};
