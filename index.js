import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import Presentation from './presentation';
import { Header, Footer } from './components';

const CustomErrorReporter = ({ error }) => <Redbox error={error} />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired,
};

ReactDOM.render(
  <AppContainer errorReporter={CustomErrorReporter}>
    <>
      <Header />
      <Presentation />
      <Footer />
    </>
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./presentation', () => {
    const NextPresentation = require('./presentation').default;
    ReactDOM.render(
      <AppContainer errorReporter={CustomErrorReporter}>
        <>
          <Header />
          <NextPresentation />
          <Footer />
        </>
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
