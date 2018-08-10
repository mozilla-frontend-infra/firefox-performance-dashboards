import { Redirect, Route, Switch } from 'react-router-dom';
import Benchmark from '../views/Benchmark';
import './metricsGraphics.css';

export default () => (
  <Switch>
    <Route path="/" exact component={Benchmark} />
    <Redirect
      from="/"
      to="/?platform=win10&benchmark=motionmark-animometer"
    />
  </Switch>
);
