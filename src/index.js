import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/app';

const ERROR_COUNT = 3;

ReactDOM.render(
    <App errorCount={ERROR_COUNT} />,
    document.getElementById(`root`)
);

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};
