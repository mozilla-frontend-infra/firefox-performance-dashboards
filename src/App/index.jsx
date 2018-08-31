import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Benchmark from '../views/Benchmark';
import Navigation from '../components/Navigation';
import { CONFIG } from '../config';
import validCombination from '../utils/validCombination';

export default () => (
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
            <div>
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
