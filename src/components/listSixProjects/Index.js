import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core';
import { CardItem } from './CardItem';
import { ViewAllProject } from './ViewAllProject';

export const useStyles = makeStyles((t) => ({
   cardGrid: {
      paddingTop: t.spacing(8),
      paddingBottom: t.spacing(8)
   }
}));

export const BaseCard = ({ projects }) => {
   const classes = useStyles();
   return (
      <Container maxWidth={'lg'} className={classes.cardGrid}>
         <Grid container spacing={4} justify='center'>
            <CardItem cards={projects} />
         </Grid>
         <ViewAllProject />
      </Container>
   );
};
