import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ClientRoutes } from './ClientRoutes';

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Switch>
               <Route path='/' component={ClientRoutes} />
            </Switch>
         </div>
      </Router>
   );
};
