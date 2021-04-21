import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import config from '../../configs/configs';

export const useStyles = makeStyles((t) => ({
   heroButtons: {
      marginTop: t.spacing(4)
   }
}));

export const AccessDetail = ({ id }) => {
   const classes = useStyles();
   const history = useHistory();
   const { paths } = config;

   const handleDetail = (id) => {
      history.push(`${paths.pathDetailProject}/:${id}`);
   };

   return (
      <div className={classes.heroButtons}>
         <Grid container spacing={2} justify='center'>
            <Grid item>
               <Button variant='contained' color='primary' onClick={() => handleDetail(id)}>
                  Ver detalle ...
               </Button>
            </Grid>
         </Grid>
      </div>
   );
};
