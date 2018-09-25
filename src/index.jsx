import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

const root = document.getElementById('root');

const styles = {
  fontFamily: 'Roboto, sans-serif',
};

const load = () => render(
  <div style={styles}>
    <AppContainer>
      <App />
    </AppContainer>
  </div>
  , root,
);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
