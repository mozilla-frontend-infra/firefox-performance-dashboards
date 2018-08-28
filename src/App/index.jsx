import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default
import Benchmark from '../views/Benchmark';
import { CONFIG } from '../config';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route
        path="/:platform/:benchmark"
        component={Benchmark}
      />
      <Redirect to={CONFIG.default.landingPath} />
    </Switch>
  </BrowserRouter>
);
