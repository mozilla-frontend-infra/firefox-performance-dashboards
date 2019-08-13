import React from 'react';
import {
  BrowserRouter, Redirect, Route, Switch,
} from 'react-router-dom';
import App from '../App';
import { CONFIG } from '../../config';
import validCombination from '../../utils/validCombination';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Redirect from="/win10Laptops/:benchmark" to="/win10ref2017/:benchmark" />
      <Route
        path="/:platform/:benchmark"
        render={({ match }) => {
          const { platform, benchmark } = match.params;
          // eslint-disable-next-line no-restricted-globals
          const searchParams = new URLSearchParams(location.search);
          const numDays = searchParams.get('numDays');
          const dayRange = numDays ? Math.round(numDays) : CONFIG.default.dayRange;
          if (!validCombination(platform, benchmark, dayRange)) {
            return <Redirect to={CONFIG.default.landingPath} />;
          }
          return (
            <App
              viewConfig={CONFIG.views[platform]}
              viewPlatform={platform}
              benchmark={benchmark}
              dayRange={dayRange}
            />
          );
        }}
      />
      <Redirect to={CONFIG.default.landingPath} />
    </Switch>
  </BrowserRouter>
);

export default Router;
