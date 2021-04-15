import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';

export const AppRouter = () => {
   return (
      <Router>
         <div>
            <Switch>
               <Route path='/admin' component={AdminRoutes} />
               <Route path='/' component={ClientRoutes} />
            </Switch>
         </div>
      </Router>
   );
};
