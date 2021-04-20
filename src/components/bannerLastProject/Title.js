import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((t) => ({
   typografyData: {
      fontWeight: 'bold'
   }
}));

export const Title = ({ title }) => {
   const classes = useStyles();
   return (
      <>
         <Typography
            component='h1'
            variant='h2'
            align='center'
            color='textPrimary'
            gutterBottom
            className={classes.typografyData}
         >
            {title}
         </Typography>
      </>
   );
};
