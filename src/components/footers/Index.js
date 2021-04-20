import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((t) => ({
   footer: {
      backgroundColor: t.palette.background.paper,
      padding: t.spacing(6)
   }
}));

export const Footer = () => {
   const classes = useStyles();

   return (
      <>
         <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
               JTG PROJECT
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary' component='p'>
               The first project of many :D
            </Typography>
            <Typography variant='body2' color='textSecondary' align='center'>
               {'Copyright © '}
               <Link color='inherit' href='#'>
                  portfolio
               </Link>{' '}
               {new Date().getFullYear()}
               {'.'}
            </Typography>
         </footer>
      </>
   );
};
