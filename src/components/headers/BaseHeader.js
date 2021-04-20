import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { HeaderItems } from './HeaderItems';
import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((t) => ({
   toolBarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      backgroundColor: '#064273',
      color: '#cad0d5',
      padding: t.spacing(0, 0, 0, 0)
   }
}));

export const BaseHeader = ({ dataItem }) => {
   const classes = useStyles();

   return (
      <>
         <CssBaseline />
         <AppBar position='relative'>
            <Toolbar component='nav' variant='dense' className={classes.toolBarSecondary}>
               <HeaderItems dataItem={dataItem} />
            </Toolbar>
         </AppBar>
      </>
   );
};
