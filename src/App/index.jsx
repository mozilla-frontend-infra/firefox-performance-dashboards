import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Benchmark from '../views/Benchmark';
import './metricsGraphics.css';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/:platform/:benchmark"
        render={({ match }) => {
          const { platform, benchmark } = match.params;
          return (
            <Benchmark
              platform={platform}
              benchmark={benchmark}
            />
          );
        }}
      />
      <Redirect to="/win10/motionmark-animometer" />
    </Switch>
  </BrowserRouter>
);
