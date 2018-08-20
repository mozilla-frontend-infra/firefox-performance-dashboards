import { parse } from 'query-string';
import { Redirect, Route, Switch } from 'react-router-dom';
import Benchmark from '../views/Benchmark';
import './metricsGraphics.css';

export default () => (
  <Switch>
    <Route
      path="/"
      render={({ location }) => {
        const { platform, benchmark } = parse(location.search);
        if (!platform || !benchmark) {
          return <Redirect to="/?platform=win10&benchmark=motionmark-animometer" />;
        }
        return (
          <Benchmark
            platform={platform}
            benchmark={benchmark}
          />
        );
      }}
    />
  </Switch>
);
