import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Code from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import config from '../../configs/configs';

export const useStyles = makeStyles((t) => ({
   moreProject: {
      padding: t.spacing(2, 2),
      color: 'white',
      fontWeight: 'bold',
      margin: t.spacing(4, 4)
   }
}));

export const ViewAllProject = () => {
   const classes = useStyles();
   const history = useHistory();
   return (
      <div>
         <Grid container spacing={2} justify='center'>
            <Grid item>
               <Button
                  color='secondary'
                  variant='contained'
                  size='large'
                  startIcon={<Code fontSize='large' />}
                  className={classes.moreProject}
                  onClick={() => {
                     history.push(config.paths.pathAllProject);
                  }}
               >
                  Ver todos los proyectos
               </Button>
            </Grid>
         </Grid>
      </div>
   );
};
