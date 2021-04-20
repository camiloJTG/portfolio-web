import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((t) => ({
   sencondaryText: {
      marginTop: t.spacing(4)
   }
}));

export const Description = ({ description }) => {
   const classes = useStyles();
   return (
      <div>
         <Typography
            variant='h5'
            align='center'
            color='textSecondary'
            paragraph
            className={classes.sencondaryText}
         >
            {description}
         </Typography>
      </div>
   );
};
