import React, { Suspense } from 'react';
import Header from './cards/Header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { routes } from './data/routes';
import { RouteDetail } from './types/types';
const App = () => {
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <BrowserRouter>
        <Header />

        <Switch>
          {routes.map((route: RouteDetail, key: number) => {
            return (
              <Route path={route.path} component={route.component} key={key} />
            );
          })}
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
