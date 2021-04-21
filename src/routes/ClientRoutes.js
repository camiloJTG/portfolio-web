import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { DetailProject } from '../pages/DetailProject';
import { ListProject } from '../pages/ListProject';
import { SocialMedia } from '../pages/SocialMedia';
import { ListByName } from '../pages/ListByName';
import { BaseHeader } from '../components/headers/BaseHeader';
import { headerClient } from '../constants/headerArrays';
import config from '../configs/configs';

export const ClientRoutes = () => {
   const { paths } = config;
   return (
      <>
         <BaseHeader dataItem={headerClient} />
         <div>
            <Switch>
               <Route exact path={paths.pathHome} component={Home} />
               <Route exact path={`${paths.pathAllProject}/:page`} component={ListProject} />
               <Route exact path={paths.pathAllSocial} component={SocialMedia} />
               <Route
                  exact
                  path={`${paths.pathProjectByName}/:name/:page`}
                  component={ListByName}
               />
               <Route
                  exact
                  path={`${paths.pathDetailProject}/:projectid`}
                  component={DetailProject}
               />
            </Switch>
         </div>
      </>
   );
};
