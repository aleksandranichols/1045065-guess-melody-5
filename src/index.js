import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import App from './components/app';

const errorCount = 3;

ReactDOM.render(
    <App errorCount={errorCount} />,
    document.getElementById(`root`)
);

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};
