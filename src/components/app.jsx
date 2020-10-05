import React from 'react';
import PropTypes from 'prop-types';
import Main from './main';

const App = (props) => {
  const {errorCount} = props;

  return <Main errorCount={errorCount} />;
};

App.propTypes = {
  errorCount: PropTypes.number.isRequired
};

export default App;
