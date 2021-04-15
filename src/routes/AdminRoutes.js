import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BaseHeader } from '../components/headers/BaseHeader';
import { headerAdmin } from '../constants/headerArrays';
import { PersonalForm } from '../pages/PersonalForm';
import { SocialForm } from '../pages/SocialForm';

import config from '../configs/configs';

export const AdminRoutes = () => {
   const { paths } = config;
   return (
      <>
         <BaseHeader dataItem={headerAdmin} />
         <div>
            <Switch>
               <Route
                  exact
                  path={paths.pathBaseAdmin + paths.pathAdminPersonal}
                  component={PersonalForm}
               />
               <Route
                  exact
                  path={paths.pathBaseAdmin + paths.pathAdminSocial}
                  component={SocialForm}
               />
            </Switch>
         </div>
      </>
   );
};
