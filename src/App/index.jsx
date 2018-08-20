import { parse } from 'query-string';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Benchmark from '../views/Benchmark';
import './metricsGraphics.css';

export default () => (
  <BrowserRouter>
    <Route
      path="/"
      render={({ location }) => {
        const { platform, benchmark } = parse(location.search);
        if (!platform || !benchmark) {
          return <Redirect to="/?platform=win10&benchmark=overview" />;
        }
        return (
          <Benchmark
            platform={platform}
            benchmark={benchmark}
          />
        );
      }}
    />
  </BrowserRouter>
);
