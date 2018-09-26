import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Benchmark from '../views/Benchmark';
import Navigation from '../components/Navigation';
import { CONFIG } from '../config';
import validCombination from '../utils/validCombination';

const styles = () => ({
  container: {
    fontFamily: 'Roboto',
  },
});

const App = ({ classes }) => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/:platform/:benchmark"
        render={({ match }) => {
          const { platform, benchmark } = match.params;
          if (!validCombination(platform, benchmark)) {
            return <Redirect to={CONFIG.default.landingPath} />;
          }
          return (
            <div className={classes.container}>
              <Navigation platform={platform} benchmark={benchmark} />
              <Benchmark {...match.params} />
            </div>
          );
        }}
      />
      <Redirect to={CONFIG.default.landingPath} />
    </Switch>
  </BrowserRouter>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withStyles(styles)(App);
